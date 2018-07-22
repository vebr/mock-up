Vue.use(VeeValidate);
AOS.init();

VeeValidate.Validator.extend('verify_password', {
	getMessage: field => `Password harus mengandung setidaknya 1 hufur besar, huruf kecil, 1 angka dan 1 simbol`,
	validate: value => {
		var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		return strongRegex.test(value);
	}
});
const infomasiAkun = new Vue({
		el: '#infomasiAkun',
		data: {
			user: {
				username: {
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
			this.cachedSP = Object.assign({}, this.user.statusPengguna);
		},
		methods: 
		{
			changePass(){
				this.user.password.value = "";
				this.user.password.isEditing = true;
			},
			saveNama() {
				this.cachedNama = Object.assign({}, this.user.nama);
				this.user.nama.isEditing = false;
			},
			saveEmail() {
				this.cachedEmail = Object.assign({}, this.user.email);
				this.user.email.isEditing = false;
			},
			savePass() {
				this.cachedPassword = Object.assign({}, this.user.password);
				this.user.password.isEditing = false;
			},
			saveSP() {	
				this.cachedSP = Object.assign({}, this.user.statusPengguna);
				this.user.statusPengguna.isEditing = false;
			},
			cancelNama() {
				this.user.nama = Object.assign({}, this.cachedNama);
				this.user.nama.isEditing = false;
			},
			cancelEmail() {
				this.user.email = Object.assign({}, this.cachedEmail);
				this.user.email.isEditing = false;
			},
			cancelPass() {
				this.user.password = Object.assign({}, this.cachedPassword);
				this.user.password.isEditing = false;
			},
			cancelSP() {
				this.user.statusPengguna = Object.assign({}, this.cachedSP);
				this.user.statusPengguna.isEditing = false;
			}
		}
	});
	
const biodata = new Vue({
	el: '#biodata',
	data: {
		biodata: {
			tanggalLahir: {
				isEditing: false,
				value: "1998-07-02"
			},
			jenisKelamin: {
				isEditing: false,
				value: 'Laki-laki'
			},
			alamat: {
				isEditing: false,
				value: 'Jalan Jembatan selatan no.9'
			},
			provinsi: {
				isEditing: false,
				value: 'Jakarta'
			},
			kodePos: {
				isEditing: false,
				value: 12160
			},
			nomorHp: {
				isEditing: false,
				value: '081320755484'
			}
		}
	},
	mounted() {
		this.cachedTL = Object.assign({}, this.biodata.tanggalLahir);
		this.cachedJK = Object.assign({}, this.biodata.jenisKelamin);
		this.cachedAlamat = Object.assign({}, this.biodata.alamat);
		this.cachedProvinsi = Object.assign({}, this.biodata.provinsi);
		this.cachedKP = Object.assign({}, this.biodata.kodePos);
		this.cachedNoHP = Object.assign({}, this.biodata.nomorHp);
	},
	methods: {
		// Save methods
		saveTL(){
			this.cachedTL = Object.assign({}, this.biodata.tanggalLahir);
			this.biodata.tanggalLahir.isEditing = false;
		},
		saveJK(){
			this.cachedJK = Object.assign({}, this.biodata.jenisKelamin);
			this.biodata.jenisKelamin.isEditing = false;
		},
		saveAlamat(){
			this.cachedAlamat = Object.assign({}, this.biodata.alamat);
			this.biodata.alamat.isEditing = false;
		},
		saveProvinsi(){
			this.cachedProvinsi = Object.assign({}, this.biodata.provinsi);
			this.biodata.provinsi.isEditing = false;
		},
		saveKP(){
			this.cachedKP = Object.assign({}, this.biodata.kodePos);
			this.biodata.kodePos.isEditing = false;
		},
		saveNoHP(){
			this.cachedNoHP = Object.assign({},this.biodata.nomorHp);
			this.biodata.nomorHp.isEditing = false;
		},
		cancelTL(){
			this.biodata.tanggalLahir = Object.assign({}, this.cachedTL);
			this.biodata.tanggalLahir.isEditing = false;
		},
		cancelJK(){
			this.biodata.jenisKelamin = Object.assign({}, this.cachedJK);
			this.biodata.jenisKelamin.isEditing = false;
		},
		cancelAlamat(){
			this.biodata.alamat = Object.assign({}, this.cachedAlamat);
			this.biodata.alamat.isEditing = false;
		},
		cancelProvinsi(){
			this.biodata.provinsi = Object.assign({}, this.cachedProvinsi);
			this.biodata.provinsi.isEditing = false;
		},
		cancelKP(){
			this.biodata.kodePos = Object.assign({}, this.cachedKP);
			this.biodata.kodePos.isEditing = false;
		},
		cancelNoHP(){
			this.biodata.nomorHp = Object.assign({}, this.cachedNoHP);
			this.biodata.nomorHp.isEditing = false;
		}
	}
	});

const pendidikan = new Vue({
	el:'#informasiPendidikan',
	data:{
		pendidikan: {
			jenjangPendidikan:{
				isEditing: false,
				value: "SMA",
			},
			jurusan: {
				isEditing: false,
				value: "IPS"
			},
			kurikulum: {
				isEditing: false,
				value: 'KTSP'
			},
			kelas:{
				sd: {
					isEditing:false,
					value: 'Silahkan pilih kelas'
				},
				smp: {
					isEditing:false,
					value: 'Silahkan pilih kelas'
				},
				sma: {
					isEditing:false,
					value: 'Silahkan pilih kelas'
				},
			}
		}
	},
	mounted() {
		this.cachedJP = Object.assign({}, this.pendidikan.jenjangPendidikan);
		this.cachedJurusan = Object.assign({}, this.pendidikan.jurusan);
		this.cachedKurikulum = Object.assign({}, this.pendidikan.kurikulum);
		this.cachedSD = Object.assign({}, this.pendidikan.kelas.sd);
		this.cachedSMP = Object.assign({}, this.pendidikan.kelas.smp);
		this.cachedSMA = Object.assign({}, this.pendidikan.kelas.sma);
	},
	
	methods: {
		// Save methods
		saveJP: function(){
			this.cachedJP = Object.assign({}, this.pendidikan.jenjangPendidikan);
			this.pendidikan.jenjangPendidikan.isEditing = false;
		},
		saveJurusan(){
			this.cachedJurusan = Object.assign({}, this.pendidikan.jurusan);
			this.pendidikan.jurusan.isEditing = false;
		},
		saveKurikulum(){
			this.cachedKurikulum = Object.assign({}, this.pendidikan.kurikulum);
			this.pendidikan.kurikulum.isEditing = false;
		},
		saveSD(){
			this.cachedSD = Object.assign({}, this.pendidikan.kelas.sd);
			this.pendidikan.kelas.sd.isEditing = false;
		},
		saveSMP(){
			this.cachedSMP = Object.assign({}, this.pendidikan.kelas.smp);
			this.pendidikan.kelas.smp.isEditing = false;
		},
		saveSMA(){
			this.cachedSMA = Object.assign({}, this.pendidikan.kelas.sma);
			this.pendidikan.kelas.sma.isEditing = false;
		},
		// Cancel methods
		cancelJP(){
			this.pendidikan.jenjangPendidikan = Object.assign({}, this.cachedJP);
			this.pendidikan.jenjangPendidikan.isEditing = false;	
		},
		cancelJurusan(){
			this.pendidikan.jurusan = Object.assign({}, this.cachedJurusan);
			this.pendidikan.jurusan.isEditing = false;	
		},
		cancelKurikulum(){
			this.pendidikan.kurikulum = Object.assign({}, this.cachedKurikulum);
			this.pendidikan.kurikulum.isEditing = false;	
		},
		cancelSD(){
			this.pendidikan.kelas.sd = Object.assign({}, this.cachedSD);
			this.pendidikan.kelas.sd.isEditing = false;	
		},
		cancelSMP(){
			this.pendidikan.kelas.smp = Object.assign({}, this.cachedSMP);
			this.pendidikan.kelas.smp.isEditing = false;	
		},
		cancelSMA(){
			this.pendidikan.kelas.sma = Object.assign({}, this.cachedSMA);
			this.pendidikan.kelas.sma.isEditing = false;	
		}
	}
	});


