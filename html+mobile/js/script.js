
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
              var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
              } else {
                document.getElementById("navbar").style.top = "-90px";
              }
              prevScrollpos = currentScrollPos;
            }
            
            // SCROLL PROGRESS
            window.addEventListener('scroll', () => {
              document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
            }, false);
                    