<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lokasi Saya</title>
</head>
<body>
    <h1>Mengetahui Lokasi Anda</h1>
    <button onclick="getLocation()">Dapatkan Lokasi Saya</button>
    <p id="lokasi"></p>

    <script>
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById("lokasi").innerHTML = "Geolocation tidak didukung oleh browser Anda.";
            }
        }

        function showPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            document.getElementById("lokasi").innerHTML = "Latitude: " + lat + "<br>Longitude: " + lon;
        }

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById("lokasi").innerHTML = "Pengguna menolak permintaan lokasi.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById("lokasi").innerHTML = "Lokasi tidak tersedia.";
                    break;
                case error.TIMEOUT:
                    document.getElementById("lokasi").innerHTML = "Permintaan lokasi melebihi waktu tunggu.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById("lokasi").innerHTML = "Terjadi kesalahan yang tidak diketahui.";
                    break;
            }
        }
    </script>
</body>
</html>
