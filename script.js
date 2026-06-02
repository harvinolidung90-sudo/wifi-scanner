// Data Wi-Fi Palsu (Mock Data) untuk simulasi
const mockNetworks = [
    { name: "Wifi_Kantor_5G", signal: "3" }, // 3 = Kuat
    { name: "indihome_1928", signal: "2" },
    { name: "MIT_WIFI", signal: "3" },
    { name: "Terserah_Lu", signal: "1" },
    { name: "Hotspot_Mentai", signal: "2" },
    { name: "LAN_JASA", signal: "3" },
    { name: "Wifi_Tamu", signal: "1" }
];

function startScan() {
    const btn = document.getElementById('scanBtn');
    const list = document.getElementById('wifiList');
    const loader = document.getElementById('loader');
    const status = document.getElementById('statusText');

    // 1. Reset UI
    list.innerHTML = ''; // Hapus list lama
    btn.disabled = true; // Matikan tombol agar tidak di-klik dua kali
    loader.classList.remove('hide'); // Tampilkan loading
    status.innerText = "Mencari sinyal Wi-Fi...";

    // 2. Proses Simulasi (timeout 2 detik)
    setTimeout(() => {
        // Matikan loading
        loader.classList.add('hide');
        status.innerText = "Pindai selesai.";

        // 3. Masukkan data ke HTML
        mockNetworks.forEach(network => {
            // Tentukan warna berdasarkan sinyal
            let strengthClass = '';
            let signalText = '';
            
            if(network.signal === '3') {
                strengthClass = 'strength-3';
                signalText = 'Excellent';
            } else if (network.signal === '2') {
                strengthClass = 'strength-2';
                signalText = 'Good';
            } else {
                strengthClass = 'strength-1';
                signalText = 'Weak';
            }

            // Buat elemen LI
            const li = document.createElement('li');
            li.className = 'wifi-item';
            li.innerHTML = `
                <span class="network-name">📶 ${network.name}</span>
                <span class="signal-strength ${strengthClass}">${signalText}</span>
            `;
            
            list.appendChild(li);
        });

        // Aktifkan tombol lagi
        btn.disabled = false;
        btn.innerText = "Pindai Lagi";

    }, 2000); // Waktu jeda 2 detik
}