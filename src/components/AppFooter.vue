<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer class="bg-provence-dark text-provence-sand px-4 lg:px-20 pt-12 pb-8 border-t border-provence-card/10">
        <div class="max-w-7xl mx-auto">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 mx-20">

                <div class="space-y-3">
                    <span class="font-cinzel text-xl font-bold tracking-wide text-provence-ochre block">
                        DinoFrance
                    </span>
                    <p class="text-provence-sand/80 text-sm leading-relaxed">
                        L’encyclopédie open-data dédiée aux espéces préhistoriques découvertes en France
                    </p>
                </div>

                <div class="space-y-3">
                    <h3 class="text-provence-ochre text-xs font-bold uppercase tracking-wider">
                        Explorer
                    </h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <RouterLink to="/"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Accueil
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/fiches"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Carte interactive
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/carte"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Gisements & musées
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="space-y-3">
                    <h3 class="text-provence-ochre text-xs font-bold uppercase tracking-wider">
                        Sources & Données
                    </h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="https://paleobiodb.org" target="_blank" rel="noopener noreferrer"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Paleobiology Database (PBDB)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.brgm.fr" target="_blank" rel="noopener noreferrer"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                BRGM (Cartes géologiques)
                            </a>
                        </li>
                        <li>
                            <a href="https://creativecommons.org/licenses/by/4.0/deed.fr" target="_blank"
                                rel="noopener noreferrer"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Licence CC BY 4.0
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="space-y-3">
                    <h3 class="text-provence-ochre text-xs font-bold uppercase tracking-wider">
                        À propos
                    </h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Code source GitHub
                            </a>
                        </li>
                        <li>
                            <RouterLink to="/mentions-legales"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Mentions légales
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact"
                                class="text-provence-sand/80 hover:text-provence-ochre transition-colors">
                                Contact
                            </RouterLink>
                        </li>
                    </ul>
                </div>

            </div>

            <div
                class="pt-6 border-t border-provence-sand/10 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-provence-sand/60">
                <p>© 2026 DinoFrance — Projet Open Source</p>
            </div>

        </div>
    </footer>
</template>