(()=>{
  const $wrapper = document.querySelector('#_BLOCK_ .wrapper');
  let tilt = {{ tilt | json }};
  let dX = {normal:1,none:0,reverse:-1}[{{ tiltX | json }}] || 0;
  let dY = {normal:1,none:0,reverse:-1}[{{ tiltY | json }}] || 0;
  {% if hoverOnly %}
    let cX = 0;
    let cY = 0;
    let w = 100;
    let h = 100;
    $wrapper.addEventListener('mouseenter', (e)=>{
      var bbox = $wrapper.getBoundingClientRect();
      cX = bbox.left + bbox.width / 2;
      cY = bbox.top + bbox.height / 2;
      w = bbox.width;
      h = bbox.height;
    });
    $wrapper.addEventListener('mousemove', (e)=>{
      $wrapper.style.setProperty('--rotate-y', dX * 8 * tilt * (e.clientX - cX) / w + 'deg');
      $wrapper.style.setProperty('--rotate-x', dY * -8 * tilt * (e.clientY - cY) / h + 'deg');
    });
  {% else %}
    let cX = window.innerWidth/2;
    let cY = window.innerHeight/2;
    let w = window.innerWidth;
    let h = window.innerHeight;
    document.addEventListener('mousemove', (e)=>{
      $wrapper.style.setProperty('--rotate-y', dX * 8 * tilt * (e.clientX - cX) / w + 'deg');
      $wrapper.style.setProperty('--rotate-x', dY * -8 * tilt * (e.clientY - cY) / h + 'deg');
    });
  {% endif %}
})();