var app = new Vue({
		el: '#app',
		data: {
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
			this.cachedUser = Object.assign({}, this.user.username);
			this.cachedNama = Object.assign({}, this.user.nama);
			this.cachedEmail = Object.assign({}, this.user.email);
			this.cachedPassword = Object.assign({}, this.user.password);
			this.cachedSP = Object.assign({}, this.user.statusPengguna);
		},
		methods: {
			save() {
				this.cachedUser = Object.assign({}, this.user.username);
				this.user.username.isEditing = false;
				this.cachedNama = Object.assign({}, this.user.nama);
				this.user.nama.isEditing = false;
				this.cachedEmail = Object.assign({}, this.user.email);
				this.user.email.isEditing = false;
				this.cachedPassword = Object.assign({}, this.user.password);
				this.user.password.isEditing = false;
				this.cachedSP = Object.assign({}, this.user.statusPengguna);
				this.user.statusPengguna.isEditing = false;
			},
			cancel() {
				this.user.username = Object.assign({}, this.cachedUser);
				this.user.username.isEditing = false;
				this.user.nama = Object.assign({}, this.cachedNama);
				this.user.nama.isEditing = false;
				this.user.email = Object.assign({}, this.cachedEmail);
				this.user.email.isEditing = false;
				this.user.password = Object.assign({}, this.cachedPassword);
				this.user.password.isEditing = false;
				this.user.statusPengguna = Object.assign({}, this.cachedSP);
				this.user.statusPengguna.isEditing = false;
			}
		}
	})
// View password function
function viewPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
