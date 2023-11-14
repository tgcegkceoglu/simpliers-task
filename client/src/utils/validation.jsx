export const onlyLettersValid = (input) => {
    const inputValue = input.replace(/[^A-Za-zğüşıöçĞÜŞİÖÇ\s]/g, ''); // Klavyeden sadece metin girişini alıyoruz.
    const nameArray = inputValue.split(" "); // Sadece ad yazılması için isim soy ismi ayırıyoruz. Birden fazla isim göz önüne alındığı için son kelimeyi çıkartıyoruz yani soyisim çıkartılıyor.
    return nameArray.length> 1 ? nameArray.slice(0, nameArray.length - 1).join(" ") : input; // eğer kişi sadece ismini girdiyse direk metni gönderiyoruz değilse soy isimi ayırıyoruz.
};

export const isEmptyValid = (input) => { 
    return input.trim().length === 0; // input girilen alan boş mu diye kontrol sağlıyoruz.
};
