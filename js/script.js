// Verileri çeken fonksiyon
function verileriGetir() {
    
    // 1. Adım: data.json dosyasına git (Fetch)
    fetch('data.json')
        .then(cevap => cevap.json()) // Cevabı JSON formatına çevir
        .then(veriler => {
            
        // ... önceki kodlar aynı ...

// 2. Adım: HTML'deki boş kutuyu bul (index.html'de id="liste-alani" olan div'e row class'ı eklemeyi unutmayın!)
const listeKutusu = document.getElementById("liste-alani");
// Bootstrap Grid yapısı için 'row' sınıfı ekliyoruz
listeKutusu.classList.add("row", "g-4"); 

veriler.forEach(veri => {
    // Bootstrap Kart Yapısı
    // col-12: Telefondan bakınca tam genişlik
    // col-md-4: Bilgisayardan bakınca 3 tane yan yana sığsın
    const yeniEleman = `
        <div class="col-12 col-md-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <div style="font-size: 3rem;">${veri.ikon}</div>
                    <h5 class="card-title mt-3">${veri.baslik}</h5>
                    <p class="card-text text-muted">${veri.aciklama}</p>
                    <button class="btn btn-primary btn-sm">Detay Gör</button>
                </div>
            </div>
        </div>
    `;

    listeKutusu.innerHTML += yeniEleman;
});
// ...
        .catch(hata => console.error("Bir hata oldu:", hata));
}

// Sayfa yüklendiğinde bu fonksiyonu çalıştır
verileriGetir();