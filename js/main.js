document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.page-image1').src = album[albumNum][counter][0];
  document.querySelector('.page-image2').src = album[albumNum][counter][1];
  document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
});

const album = [
	[
		['../images/1.jpg', '../images/2.jpg'],
		['../images/3.jpg', '../images/4.jpg'],
		['../images/5.jpg', '../images/6.jpg']
	],
	[
		['../images/7.jpg', '../images/8.jpg'],
		['../images/8.jpg', '../images/10.jpg']
	]
];

let albumNum = 0;
let counter = 0;

document.querySelector('h2').addEventListener('click', () =>{
	counter = 0;
	if(albumNum === 1) {
		document.querySelector('h2').innerHTML = '<span class="album-highlight">PORTRAITS</span> \\ <span class="album-dehighlight">PRODUCT</span>';
		albumNum = 0;
		document.querySelector('.page-image1').src = album[albumNum][counter][0];
  		document.querySelector('.page-image2').src = album[albumNum][counter][1];
  		document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
	} else if (albumNum === 0){
		albumNum = 1
		document.querySelector('h2').innerHTML = '<span class="album-dehighlight">PORTRAITS</span> / <span class="album-highlight">PRODUCT</span>';
		document.querySelector('.page-image1').src = album[albumNum][counter][0];
  		document.querySelector('.page-image2').src = album[albumNum][counter][1];
  		document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
	}

})


let interval = setInterval(turnPage, 3000);



document.querySelector('.album').addEventListener('click', (e) => {
  clearInterval(interval);
  if (e.target.classList.contains('page-image1')) {
    counter = (counter + 1) % album[albumNum].length;
  } else if (e.target.classList.contains('page-image2')) {
    counter = (counter - 1 + album[albumNum].length) % album[albumNum].length;
  }
  document.querySelector('.page-image1').src = album[albumNum][counter][0];
  document.querySelector('.page-image2').src = album[albumNum][counter][1];
  document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
  interval = setInterval(turnPage, 3000);

});


function turnPage() {
  counter = (counter + 1) % album[albumNum].length;
  document.querySelector('.page-image1').src = album[albumNum][counter][0];
  document.querySelector('.page-image2').src = album[albumNum][counter][1];
  document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
}

