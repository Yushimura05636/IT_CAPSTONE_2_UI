<template>
    <NuxtLayout name="admin">
      <main>
        <div class="bg-white">
          <header class="w-full py-8 px-4 md:px-16">
            <div class="flex justify-between items-center">
              <img src="../img/LendCash_Logo-removebg-preview.png" class="w-20" alt="logo" />
            </div>
          </header>
      
          <div class="container mx-auto p-4">
            <div class="flex justify-between items-center mb-4">
              <h1 class="text-xl font-bold">GROUP</h1>
              <div>
                <button @click="showCreateModal = true" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Create</button>
                <button @click="fetchGroups" class="bg-green-500 text-white px-4 py-2 rounded mr-2">View</button>
                <button @click="showUpdateModal = true" class="bg-yellow-500 text-white px-4 py-2 rounded">Update</button>
              </div>
            </div>
      
            <div class="mb-4">
              <input v-model="searchQuery" type="text" placeholder="Search Group" class="w-full p-2 border border-gray-300 rounded">
            </div>
      
            <table class="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b">Group Name</th>
                  <th class="py-2 px-4 border-b">Date Created</th>
                  <th class="py-2 px-4 border-b">Status</th>
                  <th class="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="group in filteredGroups" :key="group.id">
                  <td class="py-2 px-4 border-b">{{ group.name }}</td>
                  <td class="py-2 px-4 border-b">{{ group.dateCreated }}</td>
                  <td class="py-2 px-4 border-b">{{ group.isActive ? 'Active' : 'Inactive' }}</td>
                  <td class="py-2 px-4 border-b">
                    <button class="bg-blue-500 text-white px-2 py-1 rounded mr-2">Add</button>
                    <a href="GroupMemberView"><button class="bg-green-500 text-white px-2 py-1 rounded mr-2">View</button></a>
                    <button @click="editGroup(group)" class="bg-yellow-500 text-white px-2 py-1 rounded">Update</button>
                  </td>
                </tr>
              </tbody>
            </table>
      
            <!-- Create Modal -->
            <div v-if="showCreateModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div class="bg-white p-4 rounded shadow-md">
                <h2 class="text-xl font-bold mb-4">Create Group</h2>
                <input v-model="newGroupName" type="text" placeholder="Group Name" class="w-full p-2 border border-gray-300 rounded mb-4">
                <div class="mb-4">
                  <label class="block mb-2">Status</label>
                  <select v-model="newGroupStatus" class="w-full p-2 border border-gray-300 rounded">
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                <div class="flex justify-end">
                  <button @click="addGroup" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add</button>
                  <button @click="showCreateModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                </div>
              </div>
            </div>
      
            <!-- Update Modal -->
            <div v-if="showUpdateModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div class="bg-white p-4 rounded shadow-md">
                <h2 class="text-xl font-bold mb-4">Update Group</h2>
                <input v-model="editGroupName" type="text" placeholder="Group Name" class="w-full p-2 border border-gray-300 rounded mb-4">
                <div class="mb-4">
                  <label class="block mb-2">Status</label>
                  <select v-model="editGroupStatus" class="w-full p-2 border border-gray-300 rounded">
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
                <div class="flex justify-end">
                  <button @click="updateGroup" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Update</button>
                  <button @click="showUpdateModal = false" class="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </template>
  
  <script>
  //
  
  export default {
    data() {
      return {
        groups: [],
        searchQuery: '',
        showCreateModal: false,
        showUpdateModal: false,
        newGroupName: '',
        newGroupStatus: 'true',
        editGroupName: '',
        editGroupStatus: 'true',
        editGroupId: null,
      };
    },
    computed: {
      filteredGroups() {
        return this.groups.filter(group =>
          group.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      async fetchGroups() {
        try {
          const response = await axios.get('/api/groups');
          this.groups = response.data;
        } catch (error) {
          console.error('Error fetching groups:', error);
        }
      },
      async addGroup() {
        if (this.newGroupName.trim() !== '') {
          try {
            const response = await axios.post('/api/groups', {
              name: this.newGroupName,
              dateCreated: new Date().toISOString().split('T')[0],
              isActive: this.newGroupStatus === 'true',
            });
            this.groups.push(response.data);
            this.newGroupName = '';
            this.newGroupStatus = 'true';
            this.showCreateModal = false;
          } catch (error) {
            console.error('Error adding group:', error);
          }
        }
      },
      editGroup(group) {
        this.editGroupId = group.id;
        this.editGroupName = group.name;
        this.editGroupStatus = group.isActive ? 'true' : 'false';
        this.showUpdateModal = true;
      },
      async updateGroup() {
        if (this.editGroupName.trim() !== '') {
          try {
            const response = await axios.put(`/api/groups/${this.editGroupId}`, {
              name: this.editGroupName,
              isActive: this.editGroupStatus === 'true',
            });
            const index = this.groups.findIndex(group => group.id === this.editGroupId);
            this.groups[index] = response.data;
            this.editGroupName = '';
            this.editGroupStatus = 'true';
            this.showUpdateModal = false;
          } catch (error) {
            console.error('Error updating group:', error);
          }
        }
      },
    },
    mounted() {
      this.fetchGroups();
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  </style>
  