<script setup>
</script>

<template>
    <section id="clients" class="section-bg">

        <div>
            <div class="section-header">
                <h2>Initiatives & Collaborators</h2>
            </div>

            <div class="row clients-wrap">

                <div class="client-item hvr-grow">
                    <a href="https://shareone.dk/">
                        <div class="client-logo ">
                            <img src="@/public/img/shareone.png" class="img-fluid" alt="shareone-logo">
                        </div>
                    </a>
                </div>

                <div class="client-item hvr-grow">
                    <a href="https://bachelorette.dk/">
                        <div class="client-logo">
                            <img src="@/public/img/bachelorette.png" class="img-fluid" alt="bachelorette-logo">
                        </div>
                    </a>
                </div>

                <div class="client-item hvr-grow" style="object-fit: contain;">
                    <a href="https://erikona.dk/">
                        <div class="client-logo" style="object-fit: contain;">
                            <img src="@/public/img/erikona.png" class="img-fluid" alt="erikona-logo">
                        </div>
                    </a>
                </div>

                <div class="client-item hvr-grow">
                    <a href="https://tuned.dk/">
                        <div class="client-logo">
                            <img src="@/public/img/tuned.png" class="img-fluid" alt="tuned-logo">
                        </div>
                    </a>
                </div>

                <div class="client-item hvr-grow">
                    <a href="https://eliteit.dk/">
                        <div class="client-logo">
                            <img src="https://eliteit.dk/wp-content/uploads/2023/04/Elite_IT_web_190.png" class="img-fluid"
                                alt="eliteit-logo">
                        </div>
                    </a>
                </div>

                <div class="client-item hvr-grow">
                    <a href="https://dinhjemmefrisor.dk/">
                        <div class="client-logo">
                            <img src="@/public/img/dinhjemmefrisor.png" class="img-fluid" alt="dinhjemmefrisor-logo">
                        </div>
                    </a>

                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.section-header h2 {
    text-align: center;
    font-weight: 500;
    position: relative;
    padding-bottom: 40px;
}

#clients {
    padding: 40px 0 40px 0;
}

.clients-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

#clients .clients-wrap {
    margin-bottom: 30px;
}

.client-item {
    margin-left: 30px;
    
}

.client-logo {
    padding: 20px 10px;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    height: 180px;
    width: 200px;

    /*  -webkit-filter: grayscale(100%);
    filter: grayscale(100%);*/
}

/* Fitting image into div */
.img-fluid {
    display: inline-block;
    vertical-align: middle;
    max-height: 100%;
    max-width: 100%;
}

.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}

@media (max-width: 767px) {
  /* Styles for small screens (e.g., mobile phones) */
  .client-item {
    margin-left: 0;
}
.section-header h2 {
    text-align: center;
    font-weight: 500;
    position: relative;
    padding-bottom: 10px;
    padding-top: 40px;
}
}

@media (min-width: 768px) and (max-width: 991px) {
  /* Styles for medium screens (e.g., tablets) */
  .client-item {
    margin-left: 0;
    
}
.section-header h2 {
    text-align: center;
    font-weight: 500;
    position: relative;
    padding-bottom: 10px;
    padding-top: 40px;
}
}

</style>
