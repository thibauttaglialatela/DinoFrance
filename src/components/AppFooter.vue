<script setup>

</script>

<style lang="scss" scoped>
footer {
    background-color: $provence-dark;
    margin-top: 2.5rem;
    padding: 2rem 1rem;

    @media screen and (min-width: 768px) {
        padding: 3rem 5rem;
    }
}

.info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1.5fr repeat(3, 1fr);
        align-items: start;
        gap: 2.5rem;
    }

    .about {
        color: $provence-sand;
        text-align: center;

        h3 {
            font-size: 1.25rem;
            margin-bottom: 0.8rem;

            @media screen and (min-width: 768px) {
                text-align: left;
            }
        }

        p {
            text-align: left;
            max-width: 35ch;
            margin: 0 auto;

            @media screen and (min-width: 768px) {
                margin: 0;
                width: fit-content;
            }
        }
    }

    .links-section {
        width: 100%;
        text-align: center;

        @media screen and (min-width: 768px) {
            text-align: left;
        }

        h4 {
            color: $provence-ochre;
            font-size: 1.1rem;
            margin-bottom: 0.8rem;
        }

        ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;

            a {
                font-size: 0.9rem;
                text-decoration: underline;
                color: rgba($provence-sand, 0.7);
                transition: color 0.2s ease;

                &:hover,
                &.router-link-active {
                    color: $provence-ochre;
                }
            }
        }
    }
}

hr {
    border: none;
    border-top: 1px solid rgba($provence-sand, 0.15);
    margin: 2rem 0;
}

.copyright {
    p {
        color: $provence-sand;
        font-size: 0.75rem;
        text-align: center;
        margin: 0;
    }
}
</style>

<template>
    <footer>
        <section class="info-section">
            <section class="about">
                <h3>DinoFrance</h3>
                <p>L’encyclopédie dédiée aux espéces préhistoriques découvertes en France</p>
            </section>
            <section class="links-section">
                <h4>Explorer</h4>
                <ul>
                    <li>
                        <RouterLink to="/"> Accueil </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/carte"> Carte interactive </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/gisements"> Gisements & musées </RouterLink>
                    </li>
                </ul>
            </section>

            <section class="links-section">
                <h4>Sources & Données</h4>
                <ul>
                    <li>
                        <a href="https://paleobiodb.org" target="_blank" rel="noopener noreferrer">
                            Paleobiology Database (PBDB)
                        </a>
                    </li>
                    <li>
                        <a href="https://www.brgm.fr" target="_blank" rel="noopener noreferrer">
                            BRGM (Cartes géologiques)
                        </a>
                    </li>
                    <li>
                        <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank"
                            rel="noopener noreferrer">
                            Licence CC BY 4.0
                        </a>
                    </li>
                </ul>
            </section>

            <section class="links-section">
                <h4>À propos</h4>
                <ul>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            Code source GitHub
                        </a>
                    </li>
                    <li>
                        <RouterLink to="/mentions-legales"> Mentions légales </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact"> Contact </RouterLink>
                    </li>
                </ul>
            </section>
        </section>
        <hr />
        <section class="copyright">
            <p>© 2026 DinoFrance — Projet Open Source</p>
        </section>
    </footer>
</template>
