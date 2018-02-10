import React from 'react';

function Content({ children }) {
    return(
        <section className="content" id="content">
            {children}
        </section>
    )
}

export default Content