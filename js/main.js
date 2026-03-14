
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


function toggleAlbumLabel() {
  document.getElementById('portraits-label').classList.toggle('album-highlight');
  document.getElementById('portraits-label').classList.toggle('album-dehighlight');
  document.getElementById('product-label').classList.toggle('album-highlight');
  document.getElementById('product-label').classList.toggle('album-dehighlight');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.page-image1').src = album[albumNum][counter][0];
  document.querySelector('.page-image2').src = album[albumNum][counter][1];
  document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
});
document.querySelector('h2').addEventListener('click', () =>{
	counter = 0;
	toggleAlbumLabel();
	if(albumNum === 1) {
		albumNum = 0;
	} else if (albumNum === 0){
		albumNum = 1;
	}
	document.querySelector('.page-image1').src = album[albumNum][counter][0];
	document.querySelector('.page-image2').src = album[albumNum][counter][1];
	document.querySelector('h4').innerHTML = `${counter + 1}/${album[albumNum].length}`;
	document.getElementById('slash').textContent = albumNum === 1 ? ' / ' : ' \\ ';
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
