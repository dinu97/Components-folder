
//Hero

class Hero extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
  
        <link href="hero/heroOne/main-hero.css" rel="stylesheet">
  
        <!-- hero section start -->
        <div class="container hero-one" id="heroId">
            <div class="row py-4 py-lg-6">
                <div class="col-lg-4 order-lg-2 d-flex align-items-center justify-content-center justify-content-lg-start ms-lg-n6">
                    <div style="z-index:1" class="lc-block col-6 col-lg-10 mb-n3 mb-lg-0">
                        <img class="img-hero hero-main" src="hero/hero_images/heroOne-image.png " alt="download video">
                    </div><!-- /lc-block -->
                </div><!-- /col -->
                <div class="col-lg-7 ms-lg-5 text-center text-md-center text-lg-start bg-white px-lg-5 p-4">
                    <div class="col-lg-10 ms-lg-5">
                        <div class="lc-block mb-4">
                            <div contenteditable=true>
                                <h1 class="hero-heder rfs-30">All-in-one feedback</h1>
                            </div>
                        </div>
                        <div class="lc-block mb-5">
                            <div contenteditable=true>
                                <p class="hero-para"> Prioritise, manage and track your customer feedback with one tool. Collect all data and make smarter decisions in one place.</p>
                            </div>
                        </div>
                        <div class="lc-block-hero mb-5">
                        <a id="btn-order" class="btn btn-primary btn-rounded btn-lg" href="#" role="button"
                           contenteditable=true>Order Now &nbsp; </a>
                    </div>
                    </div>
                </div><!-- /col -->
        
            </div>
        </div>
        
        <!-- hero section end -->
        
        `
      
    }
  }
  
  
  customElements.define('main-hero', Hero);
  
  