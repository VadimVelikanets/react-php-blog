import React from 'react';

export const MainPage = () => {
    return (
        <>


                <header class="masthead">
                    <div class="container">
                        <div class="intro-text">
                            <h4 class="text-uppercase">Блог от Славика</h4>
                            <div class="intro-heading">Давайте поможем Славику<br />получить 60 баллов</div>
                            <a class="btn btn-xl text-white text-uppercase" href="/category/showCategory/1">Помочь</a><i class="fa fa-angle-right"></i>
                        </div>
                    </div>
                </header>

            <section class="section-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                            <h2 class="section-heading">Что это такое?</h2>
                            <hr class="dark my-4" />
                                <p class="text-faded mb-4">Это попытки выжить в этом сложном мире.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}