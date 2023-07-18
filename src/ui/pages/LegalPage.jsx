import React from "react";
import useTranslations from "../../hooks/useTranslations";
import MainLayout from "../layouts/MainLayout";

const LegalPage = () => {
  const t = useTranslations();

  return (
    <MainLayout simple>
      <div className="generic-content wrapper">
        <div className="panel">
          <h1>{t("legal:name")}</h1>
          <div className="row">
            <div className="col-4">
              <h3>ANGABEN GEMÄSS § 5 TM</h3>
              <p>
                Turn Energy GmbH <br /> Leopoldstrasse 173E, 81671 München,
                Germany <br />
                Kontakt:{" "}
                <a href="mailto:privacy@turn2x.com">privacy@turn2x.com</a>
              </p>
            </div>
            <div className="col-4">
              <h3>EINGETRAGEN IM</h3>
              <p>
                Amtsgericht München <br /> HRB 280011
              </p>
              <h3>UMSATZSTEUER ID</h3>
              <p>DE357474255</p>
            </div>
            <div className="col-4">
              <h3>VERTRETEN DURCH DIE GESCHÄFTSFÜHRER</h3>
              <p>
                Philip Kessler <br />
                Kontakt: &nbsp;
                <a href="mailto: info@turn2x.com">info@turn2x.com</a>
              </p>
              <p>
                Benedikt Stolz <br />
                Kontakt: &nbsp;
                <a href="mailto: info@turn2x.com">info@turn2x.com</a>
              </p>
              <p></p>
              <p></p>
            </div>
            <div className="col-4">
              <h3>KONTAKT</h3>
              <p>
                <a href="mailto:privacy@turn2x.com">privacy@turn2x.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="panel">
          <h3>STREITSCHLICHTUNG</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h3>HAFTUNG FÜR INHALTE</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3>HAFTUNG FÜR LINKS</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3>URHEBERRECHT</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default LegalPage;
