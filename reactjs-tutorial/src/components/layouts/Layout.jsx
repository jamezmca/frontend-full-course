export default function Layout(props) {
    const { children } = props

    const header = (
        <header>
            <h1 className="text-medium text-gradient">
                Unalive
            </h1>
        </header>
    )

    const footer = (
        <footer>
            <small>Created by</small>
            <a target="_blank" href="https://www.linkedin.com/in/jamezmcarthur/">
                <img alt="pfp" src="https://media.licdn.com/dms/image/v2/C5603AQG6Q4W3kWANtw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1630988413596?e=1747872000&v=beta&t=07eM4oD3FQOgoGqbRiV15zqzeZSmCZkUVW3cXctLNic" />
                <p>@jamezmcarthur</p>
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
        </footer>
    )

    return (
        <>
            {header}
            < main >
                {children}
            </main >
            {footer}
        </>
    )
}