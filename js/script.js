// --- 1. BÖLÜM: LİSTE GETİRME (JSON) ---
function verileriGetir() {
    
    fetch('data.json')
        .then(cevap => cevap.json())
        .then(veriler => {
            
            const listeKutusu = document.getElementById("liste-alani");
            if (!listeKutusu) return; // Hata önleyici

            listeKutusu.classList.add("row", "g-4"); 

            veriler.forEach(veri => {
                const yeniEleman = `
                    <div class="col-12 col-md-4">
                        <div class="card h-100 shadow-sm border-0">
                            <div class="card-body text-center p-4">
                                <div style="font-size: 3rem;">${veri.ikon}</div>
                                <h3 class="card-title mt-3 h4">${veri.baslik}</h3>
                                <p class="card-text text-muted">${veri.aciklama}</p>
                            </div>
                        </div>
                    </div>
                `;
                listeKutusu.innerHTML += yeniEleman;
            });

        })
        .catch(hata => console.error("Bir hata oldu:", hata));
}

// --- 2. BÖLÜM: RENK DEĞİŞTİRME (BUTON) ---
function renkDegistir() {
    // Başlığı bul
    var baslik = document.getElementById("baslik");
    
    // Rastgele renk üret
    var rastgeleRenk = Math.floor(Math.random()*16777215).toString(16);
    
    // Rengi uygula
    baslik.style.color = "#" + rastgeleRenk;
}

// Sayfa açıldığında sadece listeyi getir, renk değişimi butona basınca olacak
verileriGetir();