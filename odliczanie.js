function odliczanie()
	{
		var dzisiaj = new Date();//obiekat Date 
		
		var dzien = dzisiaj.getDate();
		if (dzien<10) dzien = "0"+dzien;
		var miesiac = dzisiaj.getMonth()+1;
		if (miesiac<10) miesiac = "0"+miesiac;
		var rok = dzisiaj.getFullYear();
		var milisekundy = dzisiaj.getTime();
		
		var end = new Date("12/31/2023");//data wydarzenia
		var endDzien = end.getDate();
		if (endDzien<10) endDzien = "0"+endDzien;
		var endMiesiac = end.getMonth()+1;
		if (endMiesiac<10) endMiesiac = "0"+endMiesiac;
		var endRok = end.getFullYear();
		var milisekundy2 = end.getTime();
		
		var pozostalo = milisekundy2 - milisekundy; //obliczamy ile milisekund pozostało do wydarzenia
		var dni = Math.floor(pozostalo/86400000); //obliczamy liczbe dni do wydarzenia
		var godzin = Math.floor(pozostalo/3600000); //obliczamy liczbe godzin do wydarzenia
		var minut = Math.floor(pozostalo/60000); //obliczamy liczbe minut do wydarzenia
		var sekund = Math.floor(pozostalo/1000); //obliczamy liczbe sekund do wydarzenia
	
		
		document.getElementById("aktualnaData").innerHTML = "Aktualna data: "+dzien+"/"+miesiac+"/"+rok; 
		document.getElementById("dataWydarzenia").innerHTML = "Data końca roku: "+endDzien+"/"+endMiesiac+"/"+endRok;
		document.getElementById("dniDoWydarzenia").innerHTML ="Koniec roku nastąpi za: "+ dni+" dni";
		document.getElementById("godzinDoWydarzenia").innerHTML ="Koniec roku nastąpi za: "+ godzin+" godzin";
		document.getElementById("minutDoWydarzenia").innerHTML ="Koniec roku nastąpi za: "+ minut+" minut";
		document.getElementById("sekundDoWydarzenia").innerHTML ="Koniec roku nastąpi za: "+ sekund+" sekund";
		setTimeout("odliczanie()",1000);
		 
	}
	
