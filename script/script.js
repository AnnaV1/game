

let pirmie = ["img/a0.jpg", "img/a1.jpg", "img/a2.jpg", "img/a3.jpg", "img/a4.jpg", "img/a5.jpg", "img/a6.jpg", "img/a7.jpg"];
            let otrie = ["img/b0.jpg", "img/b1.jpg", "img/b2.jpg", "img/b3.jpg", "img/b4.jpg", "img/b5.jpg", "img/b6.jpg", "img/b7.jpg"];
            var j=0;
	
			function removelast() {
				while (document.getElementById("forma").hasChildNodes()) {  
					document.getElementById("forma").removeChild(document.getElementById("forma").firstChild);
				}
			}
		window.onload = function() {
   
                        var modal = document.getElementById("myModal");

                        // Get the button that opens the modal
                        var btn = document.getElementById("myBtn");

                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[0];

                        // When the user clicks the button, open the modal 
                        btn.onclick = function() {
                         modal.style.display = "block";
                                                }

                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function() {
                            modal.style.display = "none";
                                                        }

                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function(event) {
                          if (event.target == modal) {
                            modal.style.display = "none";
                          }
                        }
                    }
                        
            function tabula() {
				
                let n = document.getElementById("quantity").value;
                
                let empty = [];
                for (let i = 0; i < n * n / 2; i++) {
                    empty.push(pirmie[i]);
                    empty.push(otrie[i]);
                }

                for (let i = 0; i < 20; i++) {
                    r = Math.floor(Math.random() * n * n);
                    a = empty.splice(r, 1);
                    empty.push(a);
                }




                let id1;
                let id2;
                let c = false;
                for (let r = 0; r < n; r++) {
                    let i = document.getElementsByClassName("rinda").length;
                    let divs = document.createElement("DIV");
                    divs.setAttribute("class", "rinda");
                    for (let k = 0; k < n; k++) {
                        let ievads1 = document.createElement("IMG");
                        ievads1.src = "img/back.jpg";
                        divs.appendChild(ievads1);
                        ievads1.style = "width:100px; height:100px; padding-right: 10px";
                        ievads1.setAttribute("id", "" + r * n + k);
                        ievads1.onclick = () => {
                            if (c) {
                                c = false;
                                ievads1.src = empty[r * n + k];
                                id2 = ievads1.getAttribute("id");
                                var str1 = document.getElementById(id1).src;
                                var str2 = document.getElementById(id2).src;
                                var pirmais = str1.split("img/")[1].substring(1, 2);
                                var otrais = str2.split("img/")[1].substring(1, 2);
                                if (pirmais != otrais) {
                                    setTimeout(aizver, 1000, id1, id2);
                                } else {
                                    function myFunction() {
                                        document.getElementById("body").style.pointerEvents = "none";
                                    }
                                    myFunction();

                                    j++;
                                    if(j==n*n/2){
                                         document.getElementById("myBtn").click();
                                    }
                                    setTimeout(wait, 1000);
                                   
                                }
								function myFunction() {
                                    document.getElementById("body").style.pointerEvents = "auto";
                                }
                                myFunction();
                            } else {
                                c = true;
                                ievads1.src = empty[r * n + k];
                                id1 = ievads1.getAttribute("id");
                                
                            }


                        }
                        document.getElementById("forma").appendChild(divs);

                    }

                }
            }
			function wait(){}
            function aizver(id1, id2) {
			    console.log("wait");
                function myFunction() {
                    document.getElementById("body").style.pointerEvents = "auto";
                }
                myFunction();
                document.getElementById(id2).src = "img/back.jpg";
                document.getElementById(id1).src = "img/back.jpg";
            }

            tabula();