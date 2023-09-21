        <template>
            <div class="container">
                <div class="avion" ref="avion"></div>
                <div class="estela" ref="estela"></div> 
            </div>
        </template>

        <script>
        export default {
        mounted() {
            const avion = this.$refs.avion;
            const estela = this.$refs.estela;

            let estelaLength = 30;

            document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const avionX = avion.offsetLeft + avion.clientWidth / 2;
            const avionY = avion.offsetTop + avion.clientHeight / 2;

            const deltaX = mouseX - avionX;
            const deltaY = mouseY - avionY;

            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            const speed = 0.00000000001; // Velocidad del cursor
            const moveX = Math.cos(angle) * distance * speed;
            const moveY = Math.sin(angle) * distance * speed;

            avion.style.left = avionX + moveX + 'px';
            avion.style.top = avionY + moveY + 'px';
            estelaLength += 400; 
            estela.style.width = estelaLength + 'px';
            });
        },
        };
        </script>

        <style scoped>
        .container {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: skyblue; 
            overflow: hidden;
            /*cursor: url('../assets/images/icons/cursor.png'), auto;*/
        }

        .avion {
            width: 50px;
            height: 50px;
            background-color: red; 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .estela {
            position: absolute;
            width: 30px; /* Ancho inicial de la estela */
            height: 2px; /* Altura de la estela */
            background-color: rgba(255, 0, 0, 0.5); /* Color de la estela */
            top: 50%;
            left: 50%;
            transform-origin: left center;
            transform: translate(-50%, -50%) rotate(45deg);
            z-index: -1; /* Colocar la estela detrás del avión */
        }



        </style>