import React from 'react'

function Heading2() {
    return (
        <div>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-4">
                        <img className="rounded-circle  mt-5 mb-5" id="imagen2" src="https://149353296.v2.pressablecdn.com/wp-content/uploads/2018/10/Sting-Bass-678x381.jpg" alt="" />
                    </div>
                    <div id="texto2" className="col-8  ">
                        <div className="row"><h1 >The Second Heading</h1> <h1 className="text-secondary">Pretty Cool Too</h1></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac turpis id massa ultricies congue non sed elit. Sed sed purus a nunc eleifend rhoncus. Donec enim purus, interdum mollis dictum eu, aliquam at odio. </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Heading2
