//document.addEventListener('DOMContentLoaded', () => {

  const map = new google.maps.Map(
    document.getElementById('mainMap'), {
      zoom: 14,
      center: {
        lat: 40.4169473,
        lng: -3.7035285
      }
    }
  );

  loadData(map);

//}, false);
