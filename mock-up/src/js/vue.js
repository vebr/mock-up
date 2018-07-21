const informasiAkun = new Vue({
	el: '#informasiAkun',
	data: {
		isEditing:false,
		user: {
			username: {
				isEditing: false,
				value: 'veddhaedsa'
			},
			nama: {
				isEditing: false,
				value: 'veddha edsa bening riady'
			},
			email: {
				isEditing: false,
				value: 'vedhaedsa@gmail.com'
			},
			password: {
				isEditing: false,
				value: 'Test12345'
			},
			statusPengguna: {
				isEditing: false,
				value: 'Siswa'
			},
		  },
	},
	mounted() {
		this.cachedNama = Object.assign({}, this.user.nama);
		this.cachedEmail = Object.assign({}, this.user.email);
		this.cachedPassword = Object.assign({}, this.user.password);
		this.cachedStatus = Object.assign({}, this.user.statusPengguna);
	  },
	methods: {
		save() {
			this.cachedNama = Object.assign({}, this.user.nama);
			this.cachedEmail = Object.assign({}, this.user.email);
			this.cachedPassword = Object.assign({}, this.user.password);
			this.cachedStatus = Object.assign({}, this.user.statusPengguna);
			this.user.nama.value = this.$refs['nama'].value;
			this.user.nama.isEditing = false;
			this.user.email.value = this.$refs['email'].value;
			this.user.email.isEditing = false;
			this.user.statusPengguna.value = this.user.statusPengguna.value;
			this.user.statusPengguna.isEditing = false;
		},
		cancel() {
			this.user.nama = Object.assign({}, this.cachedNama);
			this.user.nama.isEditing = false;
			this.user.email = Object.assign({}, this.cachedEmail);
			this.user.email.isEditing = false;
			this.user.password = Object.assign({}, this.cachedPassword);
			this.user.password.isEditing = false;
			this.user.statusPengguna = Object.assign({}, this.cachedStatus);
			this.user.statusPengguna.isEditing = false;
		}
	  }
  });
 
  
Vue.component('edit-informasiAkun', {
	template: '#informasiAkun'
  });
Vue.component('edit-biodata', {
	template: '#biodata'
  })
Vue.component('edit-pendidikan', {
	template: '#pendidikan'
  })
  
const tab = new Vue({
	el: '#profile', 
	data: {
	  view: 'edit-informasiAkun', 
	  active: 'informasiAkun',
	}
});
 // View password function
function viewPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}