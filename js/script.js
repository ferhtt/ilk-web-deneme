// Verileri çeken fonksiyon
function verileriGetir() {
    
    // 1. Adım: data.json dosyasına git (Fetch)
    fetch('data.json')
        .then(cevap => cevap.json()) // Cevabı JSON formatına çevir
        .then(veriler => {
            
            // 2. Adım: HTML'deki boş kutuyu bul
            const listeKutusu = document.getElementById("liste-alani");

            // 3. Adım: Her bir veri için döngü kur (Loop)
            veriler.forEach(veri => {
                
                // Yeni bir HTML içeriği oluşturuyoruz
                const yeniEleman = `
                    <div style="border-bottom: 1px solid #ddd; padding: 10px;">
                        <h3>${veri.ikon} ${veri.baslik}</h3>
                        <p>${veri.aciklama}</p>
                    </div>
                `;

                // Kutunun içine ekle
                listeKutusu.innerHTML += yeniEleman;
            });

        })
        .catch(hata => console.error("Bir hata oldu:", hata));
}

// Sayfa yüklendiğinde bu fonksiyonu çalıştır
verileriGetir();