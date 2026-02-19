<template>
  <div class="max-w-4xl mx-auto py-10">
    <div class="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
      <!-- Header -->
      <div class="h-48 bg-brown-900 relative">
        <div class="absolute inset-0 bg-gradient-to-br from-brown-800 to-black/40"></div>
        <div class="absolute -bottom-16 left-12">
          <div class="w-32 h-32 rounded-3xl border-4 border-white bg-slate-200 overflow-hidden shadow-lg relative group">
             <img v-if="user?.image" :src="user.image" class="w-full h-full object-cover">
             <div v-else class="w-full h-full flex items-center justify-center bg-brown-200 text-brown-700 text-3xl font-bold">
                {{ user?.name?.charAt(0) }}
             </div>
             <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <CameraIcon class="w-8 h-8 text-white" />
             </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="pt-20 px-12 pb-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 class="text-3xl font-display font-bold text-slate-900 mb-1">{{ user?.name }}</h1>
            <p class="text-slate-500 font-medium">{{ user?.email }}</p>
          </div>
          <button 
            @click="isEditing = !isEditing"
            class="px-6 py-2.5 rounded-xl font-bold text-sm transition-all"
            :class="isEditing ? 'bg-slate-100 text-slate-600' : 'bg-brown-700 text-white shadow-lg shadow-brown-200 hover:bg-brown-800'"
          >
            {{ isEditing ? 'Cancel Editing' : 'Edit Profile' }}
          </button>
        </div>

        <!-- Form / Info -->
        <div class="grid gap-10">
           <div class="space-y-6">
              <h3 class="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">Personal Information</h3>
              
              <div class="grid sm:grid-cols-2 gap-6">
                 <div class="space-y-2">
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      v-model="editForm.full_name" 
                      :disabled="!isEditing"
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brown-500 outline-none transition-all disabled:text-slate-500"
                    />
                 </div>
                 <div class="space-y-2">
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      :value="user?.email" 
                      disabled
                      class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-400 outline-none"
                    />
                 </div>
              </div>

              <div class="space-y-2">
                 <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bio / Introduction</label>
                 <textarea 
                   v-model="editForm.bio" 
                   :disabled="!isEditing"
                   rows="4"
                   class="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brown-500 outline-none transition-all disabled:text-slate-500"
                   placeholder="Write a short bit about your aviation journey..."
                 ></textarea>
              </div>
           </div>

           <div v-if="isEditing" class="flex justify-end pt-6 border-t border-slate-100">
              <button 
                @click="saveProfile"
                :disabled="saving"
                class="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-xl shadow-emerald-100 transition-all disabled:opacity-50"
              >
                {{ saving ? 'Saving Changes...' : 'Save Profile' }}
              </button>
           </div>
        </div>
      </div>
    </div>

    <!-- Security Section -->
    <div class="mt-8 bg-white rounded-[40px] border border-slate-100 p-12">
        <h3 class="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3">
           <ShieldCheckIcon class="w-6 h-6 text-brown-600" />
           Security & Permissions
        </h3>
        <div class="flex flex-wrap gap-2">
           <span v-for="role in user?.roles" :key="role" class="px-4 py-2 bg-slate-50 text-slate-500 rounded-full text-xs font-bold border border-slate-100">
              {{ role }}
           </span>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { CameraIcon, ShieldCheckIcon } from 'lucide-vue-next'
import { useAuth } from '../../composables/useAuth'

const { user, fetchUser } = useAuth()
const isEditing = ref(false)
const saving = ref(false)

const editForm = ref({
   full_name: '',
   bio: ''
})

watch(user, (val) => {
  if (val) {
     editForm.value.full_name = val.name
     editForm.value.bio = val.bio || ''
  }
}, { immediate: true })

async function saveProfile() {
   saving.value = true
   try {
      const res = await fetch('/api/method/lms.lms.v2_api.update_profile', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(editForm.value)
      })
      const data = await res.json()
      if (data.message?.status === 'success') {
         isEditing.value = false
         await fetchUser() // Refresh global user state
      }
   } catch (e) {
      console.error('Update failed:', e)
   } finally {
      saving.value = false
   }
}
</script>
