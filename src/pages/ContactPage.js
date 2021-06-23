import React from 'react';

export const ContactPage = () => {
    return (
        <>
            <div className="container mb-5">
                <h1 className="text-center mt-5 mb-5">Если вдруг Вам что-то не понравилось, вы можете меня найти</h1>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2647.097355755268!2d35.02933951590722!3d48.43547123834439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe349ab1ae43f%3A0x384cad302e935dec!2z0YPQuy4g0JrQsNC30LDQutC-0LLQsCwgMzgsINCU0L3QuNC_0YDQviwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1624283064643!5m2!1sru!2sua"
                    width="100%" height="450"  allowFullScreen="" loading="lazy"></iframe>


                <p className="mt-5" id="intro-text">Что вы мне сделаете, я в другом городе.</p>
                <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatem
                    vitae doloribus quaerat id minus quae nostrum, ut delectus ad laboriosam expedita ducimus! Libero,
                    nemo maiores? Expedita voluptates tempora delectus, in recusandae vero, quas dignissimos suscipit
                    sapiente id minus explicabo quod harum accusamus reprehenderit blanditiis mollitia beatae, est a
                    commodi perspiciatis. Accusantium culpa odit nostrum deleniti? Quae eos facere temporibus inventore
                    enim vitae nisi aliquid voluptatum dolorum excepturi atque nihil architecto illo distinctio
                    molestias quos ea nulla explicabo, reprehenderit nesciunt magnam voluptates. Reiciendis totam
                    maiores soluta voluptatem nesciunt praesentium, hic suscipit illum esse, quas dolor. Dolor,
                    reprehenderit, dolore sit reiciendis facere, similique saepe vero aspernatur architecto autem
                    officiis illum ut ipsa. Vel, totam, voluptate sit adipisci reiciendis dolores dolor, repellat
                    tempora soluta dignissimos ab possimus minus corrupti? Doloribus aliquid magnam doloremque amet ut
                    vel accusamus pariatur corporis fuga saepe, quod debitis voluptates at dolorem odio dolores
                    voluptatem. Neque, voluptas obcaecati?</p>

                <div className="row mt-5">
                    <div className="col">
                        <h5 className="card-title">Но сейчас я не тут</h5>
                        <div className="text-muted">
                            <p className="mb-0">г. Днепр</p>
                            <p className="mb-0">ул. Казакова 38</p>
                            <p className="mb-0">ком. 402</p>
                        </div>
                    </div>

                    <div className="col">
                        <h5 className="card-title">Пишите, звоните</h5>
                        <div className="text-muted">
                            <p className="mb-0">deniskosv@gmail.com</p>
                            <p className="mb-0">+380662812418</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}