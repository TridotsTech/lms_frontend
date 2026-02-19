import frappe
import os

no_cache = 1

def get_context(context):
    # if frappe.session.user != "Guest":
    #     frappe.local.flags.redirect_location = "/lms"
    #     raise frappe.Redirect

    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        path = os.path.normpath(os.path.join(current_dir, "../public/frontend/index.html"))
        
        if not os.path.exists(path):
            context.content = f"Frontend build not found at {path}"
            return context

        with open(path, "r") as f:
            content = f.read()
            # Rewrite /images/ to /assets/lms_frontend/frontend/images/
            # Rewrite /images/ to /assets/lms_frontend/frontend/images/
            content = content.replace('src="/images/', 'src="/assets/lms_frontend/frontend/images/')
            content = content.replace('href="/images/', 'href="/assets/lms_frontend/frontend/images/')
            
            # Inject CSRF Token
            from frappe.sessions import get_csrf_token
            csrf_token = get_csrf_token()
            
            # Inject before </head> or </body>
            script = f'<script>window.csrf_token = "{csrf_token}";</script>'
            if '</head>' in content:
                content = content.replace('</head>', f'{script}</head>')
            else:
                content = content + script
                
            context.content = content

    except frappe.Redirect:
        raise
    except Exception as e:
        frappe.log_error(f"Error serving lms_frontend website: {str(e)}")
        context.content = f"Error: {str(e)}"
    
    return context
