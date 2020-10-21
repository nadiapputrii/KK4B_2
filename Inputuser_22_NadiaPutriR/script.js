function inputData() {
    var nama = document.getElementById('name');
    var email = document.getElementById('email');
    var negara = document.getElementById('negaraa', 'negara');
    var umur = document.getElementById('tahun');
    var gender = document.getElementsByName('gender');

    var opsiname = nama.value;
    var opsiemail = email.value;
    var opsinegara = negara.value;
    var opsiumur = tahun.value;
    var realumur = 2020-tahun.value;
    var opsigender = '';

    for (var i = 0; i < gender.length; i++) {
      if(gender[i].checked == true){
        opsigender = gender[i].value;
        break;
      } 
    }

    let tampil1 = document.getElementById('tampilkan');
    let tampil2 = '';

    if( opsiname == '' || 
      opsiemail == '' ||
      opsinegara == '' ||
      opsiumur == '' ||
      opsigender == '') {
      if(opsiname == '') tampil2 += '<b>Anda Belum Memassukan Nama!</b><br></p>';
      if(opsiemail == '') tampil2 += '<p><b>Anda Belum Memassukan Email!</b></p>';
      if(opsinegara == '') tampil2 += '<p><b>Anda Belum Memilih Negara!</b></p>';
      if(opsiumur == '') tampil2 += '<p><b>Anda Belum Memasukkan Tahun Lahir!</b></p>';
      if(opsigender == '') tampil2 += '<p><b>Anda Belum Memilih Jenis Kelamin!</b></p>';
    }
    
    else{
      tampil2 += `<b><h3>Selamat Datang Di hiGirsl!</h3>
      <table>
        <tr>
          <td>Nama Lengkap </td>
          <td>:</td>
          <td>${opsiname}</td>
        </tr>
        <tr>
          <td>Email </td>
          <td>:</td>
          <td>${opsiemail}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin </td>
          <td>:</td>
          <td>${opsigender}</td>
        </tr>
        <tr>
          <td>Negara </td>
          <td>:</td>
          <td>${opsinegara}</td>
        </tr>
        <tr>
          <td>Umur </td>
          <td>:</td>
          <td>${realumur}</td>
        </tr>
      </table>`;
    }

    alert("Terimakasih Sudah Mendaftar:)")

  tampil1.innerHTML = tampil2;
}