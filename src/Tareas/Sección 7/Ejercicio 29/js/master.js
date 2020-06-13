var index = 0;
var imagenes = new Array(5);
imagenes[0] = "https://assets.nacionrex.com/__export/1582590075513/sites/debate/img/2020/02/24/69ec52ac01bd9e7c316b91bd4c3aa2ed_crop1582590058186.jpg_1577178466.jpg"
imagenes[1] = "https://dam.vanidades.com/wp-content/uploads/2020/04/%C2%A1Como-si-necesit%C3%A1ramos-m%C3%A1s-razones-para-amar-a-los-perritos-Seg%C3%BAn-investigadores-el-mejor-amigo-del-hombre-podr%C3%ADa-ayudar-a-detectar-el-coronavirus.-770x513.jpg"
imagenes[2] = "https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg"
imagenes[3] = "https://i.pinimg.com/originals/70/fa/97/70fa97bac09e524bae4c006a1ead5512.jpg"
imagenes[4] = "https://www.okchicas.com/wp-content/uploads/2015/02/perritos-m%C3%A1s-adorables-11.jpg"

imgs.innerHTML = `<img src="${imagenes[index]}" width="50%">`;

function cambiarImagen(value) {
  if (value != 0) {
    index += value;
    if (index < 0) {
      index += 5
    }
    index %= 5;
  } else {
    index = Math.round(getRandomArbitrary(0,4));
  }
  imgs.innerHTML = `<img src="${imagenes[index]}" width="50%">`;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
