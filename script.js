var i = 1;
div_to_clone = jQuery('.empresa');
for (i=1; i<10;i++){
  appendto = jQuery('.empresa').eq(jQuery('.empresa').length -1);
  div_to_clone.clone().appendTo(appendto);
}