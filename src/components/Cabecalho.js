export function Cabecalho() {
    return (
        <>
            <div className="container">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link">Topic1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Topic2</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Topic3</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Topic4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar bg-light">
                    <div class="container-fluid">
                        <img src="https://user-images.githubusercontent.com/51785898/91357843-411b3900-e7c8-11ea-8161-3e8191a6cde2.png" height={75} class="img" />
                        <a class="navbar-brand"></a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}