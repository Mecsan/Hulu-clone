let links = document.querySelectorAll('.slide');
let slider = document.querySelector(".slider");
let back = document.querySelector('.back');
let backover = document.querySelector('.overlay');


let data = [{
    title: "Live Sports",
    desc: "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
    img: ["https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png",
        "https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png",
        "https://www.hulu.com/static/hitch/s3/attachments/cka359jx805870wfx5lh6g69s-foxsports1-network-logo-0.svg",
        "https://www.hulu.com/static/hitch/s3/attachments/ckrp67fa801rn1u0tr0tnice2-nfl140x80.png"
    ],
    backimage: "https://www.hulu.com/static/hitch/s3/attachments/cl5hfizp1qtoz1v3cagkvtbk2-ckzyp3x8ycmjp1k4e5pc5p9n9-ckuh9mwjj08j01v4q0ur1z6x1-ckqwp2zlfc1zx1u362echneor-sports-v3-1600x850-min-full.jpg",
    backsmall: "https://www.hulu.com/static/hitch/s3/attachments/ckzixd47am2l91k7r9dvzt0bi-ckuh9mwn808iv1v31u5qhc0lj-ckqwp3dbnf39o1j5snovs92yr-welcome-v6-sports-min-1-full-full.jpg"
}, {
    title: "Breaking News",
    desc: "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    img: ["https://www.hulu.com/static/hitch/s3/attachments/cka35p3nn05uc0wgpnfhqdxxy-abc-news-live-network-logo.png",
        "https://www.hulu.com/static/hitch/s3/attachments/cka35pfke05ur0wgpdxhaveec-cnn-network-logo.svg",
        "https://www.hulu.com/static/hitch/s3/attachments/cka35pv5705qs0wgflaaelolw-msnbc-network-logo.png",
        "https://www.hulu.com/static/hitch/s3/attachments/cka35ppx405v60wgp6e9ybu49-foxnews-network-logo.svg"
    ],
    backimage: "https://www.hulu.com/static/hitch/s3/attachments/ckzyp4x986iio1k7rkj43368r-ckuh9mwg007ws1v4zm8i4kk07-ckqiozsqemxsf1u3mw3ihh0ti-news-1600x850-2x-full.jpg",
    backsmall: "https://www.hulu.com/static/hitch/s3/attachments/ckzixevqgs6rn1k4eh3si78i5-ckuh9mwgf07wx1v3w11vwnm7v-ckqip0kn59nkn1u4y1pbrygdu-news-375x760-2x-full-full.jpg"
}, {
    title: "Biggest Events",
    desc: "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.",
    img: ["https://www.hulu.com/static/hitch/s3/attachments/ckuh9udpy09191v07onislhds-ckpzuowwe0pmj184yae00c9dd-emmys-logo-full.png",
        "https://www.hulu.com/static/hitch/s3/attachments/ckuh9vr6l08uy1v4qqv9nqizi-ckpzut3390pzj183lizxdtgfg-golden-globe-logo-full.png",
        "https://www.hulu.com/static/hitch/s3/attachments/ckuh9wmfo08gv1v4mntr796of-ckpzutn9o0pt0184yxvnzwqx2-grammys-logo-full.png",
        "https://www.hulu.com/static/hitch/s3/attachments/ckuh9xcu908hx1v4mbds1x83w-ckpzuu4j00q0z183lbsz61e4i-oscars-logo-full.png"
    ], backimage: "https://www.hulu.com/static/hitch/s3/attachments/ckzyp5obb6ijq1k7rdave9sam-ckuh9mwj308re1v24oa5phjn9-ckqip2n0m9n5t1u2zln68cft8-biggest-events-1600x850-2x-full.jpg",
    backsmall: "https://www.hulu.com/static/hitch/s3/attachments/ckzixgoqcs6t91k56rxwnqi42-ckuh9mwhe08r61v07uaz109j1-ckqip58nxmxz71u3nhauv2qpx-biggest-events-375x760-2x-full-full.jpg"
}]





Array.from(links).forEach((link, idx) => {

    link.addEventListener('click', (e) => {
        let id = e.target.getAttribute('data-idx');
        let active = document.querySelector('.active');
        if (id == active.getAttribute('data-idx')) return;

        active.classList.remove('active');
        let dist = e.target.offsetLeft;
        let widt = e.target.clientWidth;

        slider.style.left = dist + 'px';
        slider.style.width = widt + 'px';

        e.target.classList.add('active');

        let all_data = Array.from(document.querySelectorAll('.item_some'));

        all_data.forEach((one) => {
            one.classList.remove('active_item');
        })

        all_data[id].classList.add('active_item');

        let image = data[id].backimage;
        if (innerWidth < 1050) {
            image = data[id].backsmall;
        }

        back.style.background = 'linear-gradient(rgba(0, 0, 0, 0.501),rgba(5, 0, 0, 0.296),transparent), url(' + image + ')';
        back.style.backgroundSize = 'cover';

    })

})


function LoginOverlay() {
    backover.classList.toggle('activeLogin');
}

backover.addEventListener('click', (e) => {
    if (e.target.classList.contains('activeLogin')) {
        backover.classList.toggle('activeLogin');
    }
})

document.body.onload = () => {

    let width = document.querySelector('.active').clientWidth;

    slider.style.width = width + 'px';

    let str = "";

    data.forEach((da, id) => {
        if (id == 0) {
            str += `<div class='item_some active_item'>`;
        } else {
            str += `<div class='item_some'>`
        }
        str += `<h1>${da.title}</h1>
        <div class="desc">${da.desc}</div>
        <div class="img_logos">`;

        da.img.forEach((im) => {
            str += ` <img src="${im}"
            alt="" class="small_img">`
        })

        str += '</div></div>';
    })

    let some = document.querySelector('.data_contain');
    some.innerHTML += str;

}

function footerLinks(obj) {
    let cols = obj.parentNode.parentNode.querySelector('.descr');
    if (cols.classList.contains('none')) {
        obj.style.transform = "rotateX(180deg)"
    } else {
        obj.style.transform = "rotateX(0deg)"
    }
    cols.classList.toggle('none');
}
