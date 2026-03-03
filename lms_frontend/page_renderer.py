"""Custom page renderer for LMS Frontend SPA.

Intercepts routes that should be handled by the Vue SPA
before Frappe's built-in renderers (e.g., Blog Post) can claim them.
"""

import os
import frappe
from frappe.website.page_renderers.base_renderer import BaseRenderer


# Routes that the Vue SPA handles - these must be intercepted before
# Frappe's built-in handlers (Blog Post DocType, etc.) can claim them.
SPA_ROUTES = {
	"blog",
	"signup",
	"forgot-password",
	"courses",
	"courses-static",
	"about",
	"contact",
	"v2",
	"v3",
	"v4",
	"v5",
	"portal",
	"privacy",
	"terms",
	"instructions",
	"login",
}


class SPAPageRenderer(BaseRenderer):
	"""Renders the Vue SPA for routes that conflict with Frappe's built-in handlers."""

	def can_render(self):
		# Use the actual request path, not the resolved endpoint
		# because Frappe's path resolver may resolve /blog/my-slug to "Blog Post"
		request_path = getattr(frappe.local, "request", None)
		if request_path:
			path = request_path.path.strip("/")
		else:
			path = self.path.strip("/")

		if not path:
			return False

		# Get the first segment of the path
		first_segment = path.split("/")[0]
		return first_segment in SPA_ROUTES

	def render(self):
		"""Serve the Vue SPA HTML with CSRF token injected."""
		try:
			current_dir = os.path.dirname(os.path.abspath(__file__))
			html_path = os.path.normpath(os.path.join(current_dir, "public/frontend/index.html"))

			if not os.path.exists(html_path):
				frappe.throw(f"Frontend build not found at {html_path}")

			with open(html_path, "r") as f:
				content = f.read()

			# Rewrite image paths in the HTML template
			content = content.replace('src="/images/', 'src="/assets/lms_frontend/frontend/images/')
			content = content.replace('href="/images/', 'href="/assets/lms_frontend/frontend/images/')

			# Inject CSRF Token
			from frappe.sessions import get_csrf_token

			csrf_token = get_csrf_token()
			script = f'<script>window.csrf_token = "{csrf_token}";</script>'
			if "</head>" in content:
				content = content.replace("</head>", f"{script}</head>")
			else:
				content = content + script

			return self.build_response(content, headers={"Content-Type": "text/html"})

		except Exception as e:
			frappe.log_error(f"SPAPageRenderer error: {str(e)}")
			raise
