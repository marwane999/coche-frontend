import type { Metadata } from 'next'
import SectionWrapper from '@/components/shared/SectionWrapper'

export const metadata: Metadata = {
  title: 'Mentions légales – Coach Consulting',
  description: "Mentions légales du site Coach Consulting. Identité, hébergeur, propriété intellectuelle, données personnelles et loi 09-08.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-bold mb-4">
            Mentions légales
          </h1>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose prose-sm">
          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">1. Identité</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Coach Consulting</strong> – Société à Responsabilité Limitée (SARL) de droit marocain.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Siège social : 82, Bd Abdelmoumen, Casablanca 20250, Maroc<br />
            Téléphone : +212 5 22 35 07 04<br />
            Email : contact@coachconsulting.ma<br />
            RC : Casablanca<br />
            IF : XXXXXXXX<br />
            Patente : XXXXXXXX<br />
            CNSS : XXXXXXXX
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">2. Directeur de la publication</h2>
          <p className="text-muted-foreground leading-relaxed">
            Le directeur de la publication du site coachconsulting.ma est le gérant de Coach Consulting.
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">3. Hébergeur</h2>
          <p className="text-muted-foreground leading-relaxed">
            Le site coachconsulting.ma est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : https://vercel.com
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">4. Propriété intellectuelle</h2>
          <p className="text-muted-foreground leading-relaxed">
            L&apos;ensemble du contenu du site coachconsulting.ma (textes, images, logos, vidéos,
            documents téléchargeables, etc.) est protégé par le droit d&apos;auteur et les lois
            marocaines sur la propriété intellectuelle. Toute reproduction, représentation,
            modification ou exploitation, totale ou partielle, sans autorisation préalable écrite
            de Coach Consulting est interdite et constitue une contrefaçon.
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">5. Données personnelles</h2>
          <p className="text-muted-foreground leading-relaxed">
            Conformément à la Loi n° 09-08 relative à la protection des personnes physiques à
            l&apos;égard du traitement des données à caractère personnel, vous disposez d&apos;un
            droit d&apos;accès, de rectification, d&apos;opposition et de suppression des données
            vous concernant.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-2">
            Les informations collectées via le formulaire de contact sont destinées exclusivement
            à Coach Consulting et ne seront en aucun cas cédées à des tiers. Vous pouvez exercer
            vos droits en nous contactant à l&apos;adresse email : contact@coachconsulting.ma.
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">6. Loi applicable</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les présentes mentions légales sont régies par la législation marocaine. Tout litige
            relatif à l&apos;utilisation du site coachconsulting.ma relève de la compétence des
            tribunaux de Casablanca, Maroc.
          </p>

          <h2 className="text-xl font-heading font-bold text-secondary mt-8 mb-3">7. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Le site coachconsulting.ma peut utiliser des cookies à des fins de mesure d&apos;audience
            et d&apos;amélioration de l&apos;expérience utilisateur. Vous pouvez configurer votre
            navigateur pour refuser les cookies.
          </p>
        </div>
      </SectionWrapper>
    </>
  )
}
