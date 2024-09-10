//Menghitung Luas 
function hitungluas() {
    //Mengambil nilai dari Tinggi dan Alas
    const tinggi =  document.getElementById('tinggi').value;
    const alas =  document.getElementById('alas').value;

    if (tinggi>0 & alas>0){

        const Luas = 0.5 * alas * tinggi

        document.getElementById('hitungluas').innerText = ` ${Luas} cm²`;



    }
    else {
        document.getElementById('hitungluas').innerText = "Terdapat kesalahan: sisi segitiga tidak boleh kurang dari atau sama dengan nol.";

}}

// Menghitung Keliling 
function hitungkeliling() {
    //Mengambil nilai dari Tinggi dan Alas
    const sisi_1 =  parseFloat(document.getElementById('sisi 1').value);
    const sisi_2 =  parseFloat(document.getElementById('sisi 2').value);
    const sisi_3 =  parseFloat(document.getElementById('sisi 3').value);

    if (sisi_1>0 & sisi_2>0 & sisi_3>0){

        const Keliling = sisi_1 + sisi_2 + sisi_3

        document.getElementById('hitungkeliling').innerText = ` ${Keliling} cm`;
    }
    else {
        document.getElementById('hitungkeliling').innerText = "Terdapat kesalahan: sisi segitiga tidak boleh kurang dari atau sama dengan nol.";

}
}

 // Menghapus nilai input Perhitungan Keliling
function hapusInputkeliling() {
   
    document.getElementById('sisi 1').value = '';
    document.getElementById('sisi 2').value = '';
    document.getElementById('sisi 3').value = '';

    document.getElementById('hitungkeliling').innerText = '';}


    // Menghapus nilai input Perhitungan luas 
    function hapusInputluas() {
        document.getElementById('tinggi').value = '';
        document.getElementById('alas').value = '';
   
        document.getElementById('hitungluas').innerText = '';}



