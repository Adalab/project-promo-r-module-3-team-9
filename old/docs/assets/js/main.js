"use strict";const resetBtn=document.querySelector(".js-card__button"),profileName=document.querySelector(".js-profile__name"),profileText=document.querySelector(".js-profile__text"),profileImg=document.querySelector(".js-image"),linkMobile=document.querySelector(".js-nav__mobile"),linkEmail=document.querySelector(".js-nav__mail"),linkLinkedin=document.querySelector(".js-nav__linkedin"),linkGithub=document.querySelector(".js-nav__github"),cardArticlePreview=document.querySelector(".js-card__article"),form=document.querySelector(".js-form"),designClicker=document.querySelector(".js-design-clicker"),paletteRadio1=document.querySelector(".palettes__1--radio"),paletteRadio2=document.querySelector(".palettes__2--radio"),paletteRadio3=document.querySelector(".palettes__3--radio"),fillClicker=document.querySelector(".js-fill-clicker"),inputName=document.querySelector(".js-name"),inputJob=document.querySelector(".js-job"),inputPhoto=document.querySelector(".js-photo"),inputEmail=document.querySelector(".js-email"),inputPhone=document.querySelector(".js-phone"),inputLinkedin=document.querySelector(".js-linkedin"),inputGithub=document.querySelector(".js-github"),shareClicker=document.querySelector(".js-share-clicker"),errorMessage=document.querySelector(".js-errormessage"),newCardLink=document.querySelector(".js-new_cardlink"),twitterBtn=document.querySelector(".js-twitter-share-button"),arrowDesign=document.querySelector(".js-arrow-design"),sectionDesign=document.querySelector(".js-design__wrap2"),arrowFill=document.querySelector(".js-arrow-fill"),sectionFill=document.querySelector(".js-fill__wrap2"),arrowShare=document.querySelector(".js-arrow-share"),sectionShare=document.querySelector(".js-share-wrap-all"),createCardBtn=document.querySelector(".js-create__btn"),sectionCardCreate=document.querySelector(".js-share__wrap3");let data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function resetBtnClick(e){e.preventDefault(),data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},sectionCardCreate.classList.add("collapsed"),newCardLink.value="",newCardLink.href="",cardArticlePreview.classList.add("palette-1"),cardArticlePreview.classList.remove("palette-2"),cardArticlePreview.classList.remove("palette-3"),paletteRadio1.checked=!0,inputName.value="",inputJob.value="",fileField.value="",profileImage.style.backgroundImage="",profilePreview.style.backgroundImage="",inputEmail.value="",inputPhone.value="",inputLinkedin.value="",inputGithub.value="",localStorage.clear(),twitterBtn.href="https://twitter.com/intent/tweet?text=Mirad%20mi%20nueva%20tarjeta%20",createCardBtn.disabled=!1,createCardBtn.classList.remove("button-disabled"),updatePreview()}function handlePalette(e){cardArticlePreview.classList.remove("palette-1"),cardArticlePreview.classList.remove("palette-2"),cardArticlePreview.classList.remove("palette-3"),cardArticlePreview.classList.add("palette-"+e.currentTarget.value)}function handleInput(e){const t=e.target.name,a=e.target.value;if("linkedin"===t){const e=a.split("/"),r=e.length;a.endsWith("/")?data[t]=e[r-2]:data[t]=e[r-1]}else if("github"===t){const e=a.replace("@","");data[t]=e}else data[t]=a;updatePreview(),saveData()}function updatePreview(){const e=inputName.value;profileName.innerHTML=""===e?"Nombre apellido":e;const t=inputJob.value;profileText.innerHTML=""===t?"Front-end developer":t;const a=inputPhone.value;linkMobile.href=""===a?"":"tel:"+a;const r=inputEmail.value;linkEmail.href=""===r?"":"mailto:"+r;const l=inputLinkedin.value;if(""===l)linkLinkedin.href="";else{const e=l.split("/"),t=e.length;let a="";a=l.endsWith("/")?e[t-2]:e[t-1],linkLinkedin.href="https://www.linkedin.com/in/"+a}const i=inputGithub.value;if(""===i)linkGithub.href="";else{const e=i.replace("@","");linkGithub.href="https://github.com/"+e}}function closeDesign(){sectionDesign.classList.add("collapsed"),arrowDesign.classList.add("arrow-down"),arrowDesign.classList.remove("arrow-up")}function closeShare(){sectionShare.classList.add("collapsed"),arrowShare.classList.add("arrow-down"),arrowShare.classList.remove("arrow-up")}function closeFill(){sectionFill.classList.add("collapsed"),arrowFill.classList.add("arrow-down"),arrowFill.classList.remove("arrow-up")}resetBtn.addEventListener("click",resetBtnClick),paletteRadio1.addEventListener("click",handlePalette),paletteRadio2.addEventListener("click",handlePalette),paletteRadio3.addEventListener("click",handlePalette),form.addEventListener("input",handleInput),createCardBtn.disabled=!1,designClicker.addEventListener("click",e=>{e.preventDefault(),sectionDesign.classList.contains("collapsed")&&(sectionDesign.classList.remove("collapsed"),arrowDesign.classList.add("arrow-up"),arrowDesign.classList.remove("arrow-down"),closeFill(),closeShare())}),fillClicker.addEventListener("click",e=>{e.preventDefault(),sectionFill.classList.contains("collapsed")&&(sectionFill.classList.remove("collapsed"),arrowFill.classList.add("arrow-up"),arrowFill.classList.remove("arrow-down"),closeDesign(),closeShare())}),shareClicker.addEventListener("click",e=>{e.preventDefault(),sectionShare.classList.contains("collapsed")&&(sectionShare.classList.remove("collapsed"),arrowShare.classList.add("arrow-up"),arrowShare.classList.remove("arrow-down"),closeDesign(),closeFill())}),JSON.parse(localStorage.getItem("newCardUrl"))?(sectionCardCreate.classList.remove("collapsed"),createCardBtn.disabled=!0,createCardBtn.classList.add("button-disabled"),newCardLink.innerHTML=JSON.parse(localStorage.getItem("newCardUrl")),newCardLink.href=JSON.parse(localStorage.getItem("newCardUrl")),twitterBtn.href+=JSON.parse(localStorage.getItem("newCardUrl"))):sectionCardCreate.classList.add("collapsed");const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}function handleCreateCardClick(e){e.preventDefault(),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e),e.success?(sectionCardCreate.classList.remove("collapsed"),errorMessage.innerHTML="",newCardLink.innerHTML=e.cardURL,newCardLink.href=e.cardURL,twitterBtn.href+=e.cardURL,createCardBtn.disabled=!0,createCardBtn.classList.add("button-disabled"),localStorage.setItem("newCardUrl",JSON.stringify(e.cardURL))):(sectionCardCreate.classList.add("collapsed"),errorMessage.innerHTML="Debes rellenar todos los campos",console.log("error"))})}function saveData(){localStorage.setItem("dataFromForm",JSON.stringify(data))}function printFromLocal(){data=JSON.parse(localStorage.getItem("dataFromForm")),"2"===data.palette?(paletteRadio1.checked=!1,paletteRadio2.checked=!0,paletteRadio3.checked=!1,cardArticlePreview.classList.add("palette-2"),cardArticlePreview.classList.remove("palette-1"),cardArticlePreview.classList.remove("palette-3")):"3"===data.palette?(paletteRadio1.checked=!1,paletteRadio2.checked=!1,paletteRadio3.checked=!0,cardArticlePreview.classList.add("palette-3"),cardArticlePreview.classList.remove("palette-1"),cardArticlePreview.classList.remove("palette-2")):(paletteRadio1.checked=!0,paletteRadio2.checked=!1,paletteRadio3.checked=!1,cardArticlePreview.classList.add("palette-1"),cardArticlePreview.classList.remove("palette-2"),cardArticlePreview.classList.remove("palette-3")),inputName.value=data.name,inputJob.value=data.job,data.photo&&(profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`),inputPhone.value=data.phone,inputEmail.value=data.email,inputLinkedin.value=data.linkedin,inputGithub.value=data.github,updatePreview()}fileField.addEventListener("change",getImage),createCardBtn.addEventListener("click",handleCreateCardClick),JSON.parse(localStorage.getItem("dataFromForm"))&&printFromLocal();