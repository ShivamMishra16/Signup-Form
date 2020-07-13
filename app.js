function handleClick(){
	document.getElementById('bnr').style.display = 'none';
	document.getElementById('frm-container').style.cssText='opacity:1; visibility: visible';
	document.querySelector('.container').style.background='#696969';
};



function exClick(){
	document.querySelector('.banner').style.display = 'flex';
    document.getElementById('frm-container').style.display = 'none';
    document.getElementById('cntnr').style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .6)), url(images/city.jpg) center no-repeat; background-size: cover;'
};