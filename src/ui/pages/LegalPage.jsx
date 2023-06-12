import React from "react";
import useTranslations from "../../hooks/useTranslations";
import MainLayout from "../layouts/MainLayout";

const LegalPage = () => {
  const t = useTranslations();

  return (
    <MainLayout bottomPattern simple>
      <div className="generic-content wrapper">
        <div className="panel">
          <h1 className="alpha">{t("legal:name")}</h1>
          <div className="row">
            <div className="col-4">
              <h2 className="lead-m">ANGABEN GEMÄSS § 5 TM</h2>
              <p className="text-l">
                AUCTA GmbH <br /> Zionskirchstr. 15 <br /> 10119 Berlin Kontakt:
                contact@aucta.io
              </p>
            </div>
            <div className="col-4">
              <h2 className="lead-m">EINGETRAGEN IM</h2>
              <p className="text-l">
                AUCTA GmbH <br /> Zionskirchstr. 15 <br /> 10119 Berlin Kontakt:
                contact@aucta.io
              </p>
              <h2 className="lead-m">UMSATZSTEUER IDR</h2>
              <p className="text-l">DE325519621</p>
            </div>
            <div className="col-4">
              <h2 className="lead-m">VERTRETEN DURCH DIE GESCHÄFTSFÜHRER</h2>
              <p className="text-l">
                Daniel Seiler <br />
                Henri Huselstein <br />
                Elías Alonso
              </p>
              <p className="text-l"></p>
              <p className="text-l"></p>
            </div>
            <div className="col-4">
              <h2 className="lead-m">KONTAKT</h2>
              <p className="text-l">contact@aucta.io</p>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2 className="lead-m">STREITSCHLICHTUNG</h2>
          <p className="text-l">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h2 className="lead-m">HAFTUNG FÜR INHALTE</h2>
          <p className="text-l">
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
          <h2 className="lead-m">HAFTUNG FÜR LINKS</h2>
          <p className="text-l">
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
          <h2 className="lead-m">URHEBERRECHT</h2>
          <p className="text-l">
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
