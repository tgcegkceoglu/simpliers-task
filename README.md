# simpliers-task

## Task Resimleri
<p float="left">
      <img src="https://github.com/tgcegkceoglu/simpliers-task/assets/74832430/3ccef663-b621-4d8a-88a5-ad27de498f8f" width="300" />
      <img src="https://github.com/tgcegkceoglu/simpliers-task/assets/74832430/96facb1e-2b05-4363-8620-f3b3fa744e65" width="300" />
   <br>
     <img src="https://github.com/tgcegkceoglu/simpliers-task/assets/74832430/94bf966f-a5de-4946-8338-09b34bb588bf" width="300" />   
    <img src="https://github.com/tgcegkceoglu/simpliers-task/assets/74832430/9d3ef14b-4e56-4994-a4b5-e79362eed18e" width="300"/> 
  <br>
  <img src="https://github.com/tgcegkceoglu/simpliers-task/assets/74832430/1ba0a4ac-916d-4e4b-bb42-7ae45461c095" width="300" />
</p>

## Task Kurulum
Proje dosyalarını bilgisayarınıza kopyalayın.
### Server
- Teminali açınız.
- cd server
- yarn
- yarn start

### Client
- Yeni terminal açınız !!
- cd client
- yarn
- yarn dev

## Task Kod Açıklamaları

# Socket.IO Sunucu Ayarları
Socket.IO sunucusu, `http://localhost:3001` adresinde çalışmaktadır. İstemcilere bu adres üzerinden bağlanmalarına izin vermektedir.

# Socket.IO Olayları
- `connection`: Yeni bir kullanıcı bağlandığı zaman tetiklenmektedir.
- `join_room`: Yei gelen kullanıcı, belirtilen bir odaya katılmak istediği zaman tetiklenmektedir.
- `send_message`: Kullanıcılar, belirli bir odaya mesaj gönderdikleri zaman tetiklenmektedir.
- `receive_message`: Odaya gönderilen mesajı dinlemek için kullanılmaktadır.
- `disconnect`: Kullanıcı bağlantısı koptuğu zaman tetiklenmektedir.

# İzin Verilen Origins
Sadece `http://localhost:5173` adresinden gelen isteklere izin verilir.

# PrivateRoute Bileşeni
Bu bileşen, kullanıcının oturumu açıkken belirli bir rota içeriğini görüntülemesine izin vermekte ve oturumu açık olmayan kullanıcıları giriş sayfasına yönlendirmektedir.

# mapAuth Fonksiyonu
Bu fonksiyon, Eğer kullanıcı girişi gerekliyse  'PrivateRoute' bileşeni aracılığıyla yetkilendirme kontrolü yaparak sayfa yönlendirmesi yapıyoruz.Eğer kullanıcı girişi gerekli değilse direk sayfaya yönlendiriyoruz

# PrivateRoute Bileşeni
Bu bileşen, kullanıcının oturumu açıkken belirli bir rota içeriğini görüntülemesine izin vermekte ve oturumu açık olmayan kullanıcıları giriş sayfasına yönlendirmektedir.

# onlyLettersValid Fonksiyonu
Bu fonksiyon, kullanıcının sadece metin girmesinin alınmasını ve metin tek karakterliyse tüm metinin alınmasını eğer değilse son kelimenin çıkarılarak alınmasını sağlar.

# isEmptyValid Fonksiyonu
Bu fonksiyon, inputa girilen metnin dolu olup olmadığının cevabını döndürür.

# sendMessage Fonksiyonu
Bu Fonksiyon, kullanıcı, kullanıcının girdği mesajı, odayı ve zamanı içeren mesaj datası oluşturur. Daha sonra bu datayı sunucuya iletir, mesaj listesini setler ve mesaj inputunu temizler.

# handleKeyDown Fonksiyonu
Bu fonksiyon, kullanıcının enter tuşuyla mesaj gönderebilmesini sağlar.

# handleNameChange Fonksiyonu 
Bu fonksiyon, isim alanına girilen metnin user kısmına setlenmesini gerçekleştirir.

# handleFormSubmit Fonksiyonu
Bu fonksiyon, inputlar boş mu kontrolü gerçekleştirir. Eğer boşsa uyarı çıkartır. Değil ise success true olarak setler.

