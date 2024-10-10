const headerTxt = document.getElementById('headerTxt');
        let colorIndex = 0;
 
        function changeColor() {
            const colors = ['red', 'green', 'blue', 'orange']; // Add more colors as needed
            headerTxt.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }
 