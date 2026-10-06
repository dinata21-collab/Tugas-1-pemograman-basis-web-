const form = document.getElementById("formPemesanan");
const tabelData = document.getElementById("tabelData");
const modalAlert = document.getElementById("modalAlert");
const modalPesan = document.getElementById("modalPesan");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let matkul = document.getElementById("matkul").value;
    let errNim = document.getElementById("errNim");

    if (isNaN(nim) || nim.trim() === "") {
        errNim.textContent = "NIM harus berupa angka!";
        return;
    } else {
        errNim.textContent = "";
    }

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${nim}</td>
        <td>${nama}</td>
        <td>${matkul}</td>
        <td><button onclick="hapusBaris(this)">Hapus</button></td>
    `;
    tabelData.appendChild(row);

    modalPesan.textContent = `Sukses! Pesanan ${matkul} untuk ${nama} berhasil ditambahkan.`;
    modalAlert.style.display = "flex";

    form.reset();
});

function hapusBaris(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
}

function tutupModal() {
    modalAlert.style.display = "none";
}
