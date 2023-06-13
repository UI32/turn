import React from "react";
import useTranslations from "../../hooks/useTranslations";
import MainLayout from "../layouts/MainLayout";

const PrivacyPage = () => {
  const t = useTranslations();

  return (
    <MainLayout bottomPattern simple>
      <div className="generic-content wrapper">
        <div className="panel">
          <h1 className="alpha">Datenschutzerklärung</h1>
          <p className="text-l">
            Willkommen bei AUCTA! Diese Datenschutzerklärung klärt Sie über die
            Verarbeitung von personenbezogenen Daten über unsere Webseite auf.
            Personenbezogene Daten („Daten“) sind alle Informationen, die sich
            auf eine bestimmte oder bestimmbare Person beziehen. Die Daten
            werden von uns nur im Rahmen der Erforderlichkeit, sowie zum Zwecke
            der Bereitstellung eines funktionsfähigen und nutzerfreundlichen
            Internetauftritts, sowie zur Bereitstellung unserer Inhalte und
            Leistungen, verarbeitet. Diese Datenschutzerklärung kann jederzeit
            auf der Webseite abgerufen und ausgedruckt werden. Wir behalten uns
            vor, diese Datenschutzerklärung unter Beachtung der gesetzlichen
            Bestimmungen zu ändern. Als „Verarbeitung“ von Daten gilt jeder mit
            oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder
            jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen
            Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen,
            die Speicherung, die Anpassung oder Veränderung, das Auslesen, das
            Abfragen, die Verwendung, die Offenlegung durch Übermittlung,
            Verbreitung oder eine andere Form der Bereitstellung, den Abgleich
            oder die Verknüpfung, die Einschränkung, das Löschen oder die
            Vernichtung. Die rechtlichen Grundlagen des Datenschutzes finden
            sich insbesondere in der Verordnung (EU) 2016/679 des Europäischen
            Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher
            Personen bei der Verarbeitung personenbezogener Daten, zum freien
            Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG
            („Datenschutz-Grundverordnung“, DSGVO) sowie im
            Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
          </p>

          <h2 className="lead-m">Verantwortlicher</h2>
          <p className="text-l">
            Für die Datenverarbeitung verantwortlich ist <br /> AUCTA GmbH
            <br />
            Zionskirchstr. 15 <br /> 10119 Berlin <br />
            Kontakt:
            <a href="mailto=privacy@aucta.io">privacy@aucta.io</a>
            <br />
            Verantwortlicher ist die natürliche oder juristische Person, die
            allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet.
          </p>
          <h2 className="lead-m">Umfang der Datenverarbeitung</h2>
          <p className="text-l">
            Die Daten werden von uns bzw. von Dritten im Rahmen der
            Websitenutzung verarbeitet. Wir setzen dabei verschiedene
            Drittanbieter ein in den Bereichen Hosting, Mailingdienste,
            Software, Kunden-/Datenmanagement (CRM) sowie ggf.
            Abrechnungsdienstleistungen, die jeweils in unserem Auftrag Daten
            verarbeiten. Mit diesen Drittanbietern haben wir entsprechende
            Auftragsverarbeitungsverträge geschlossen, die sicherstellen, dass
            auch bei unseren Auftragsverarbeitern ein hinreichendes
            Datenschutzniveau garantiert wird (Art. 28 DSGVO). Für mehr
            Informationen zur den genutzten Drittanbietern können Sie uns gerne
            jederzeit kontaktieren (etwa per E-Mail an
            <a href="mailto=privacy@aucta.io">privacy@aucta.io</a>). <br /> Wir
            verarbeiten Ihre Daten nur, sofern dies für die genannten Zwecke
            erforderlich ist. Eine Nichtbereitstellung der Daten kann rechtliche
            Nachteile haben, wie z.B. den Verlust von Rechtspositionen, etwa
            keine Antwort auf Ihre Anfrage oder die Nichtdurchführbarkeit eines
            Vertrages. Wir bzw. die von uns genutzten Drittanbieter verarbeiten
            personenbezogenen Daten grundsätzlich innerhalb der EU/EWR. Sobald
            Ihre Daten außerhalb der EU/EWR verarbeitet werden, wird jeweils die
            Einhaltung der europäischen Datenschutzstandards gewährleistet und
            wir werden Sie darüber informieren. Weiter haben wir technische und
            organisatorische Maßnahmen getroffen, die sicherstellen, dass die
            Vorschriften über den Datenschutz sowohl von uns als auch von
            externen Dienstleistern beachtet werden. Unsere Webseite nutzt aus
            Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, die etwa Sie an uns als Seitenbetreiber senden, eine
            SSL-bzw. TLS-Verschlüsselung.
          </p>
          <h2 className="lead-m">Besuch der Webseite und Nutzung der App</h2>
          <p className="text-l">
            Wir erheben Daten über jeden Besuch unserer Webseite (so genannte
            Serverlogfiles). Die im Folgenden genannten Daten werden wie folgt
            verarbeitet:
          </p>
          <div className="table-wrapper">
            <table>
              <tr>
                <th>Daten / Informationen</th>
                <th>Verarbeitungszweck</th>
                <th>Rechtsgrundlage</th>
              </tr>
              <tr>
                <td>
                  Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des
                  Abrufs, übertragene Datenmenge, Meldung über erfolgreichen
                  Abruf, Browsertyp nebst Version, Betriebssystem/-version,
                  Referrer URL (die zuvor besuchte Seite), IP-Adresse und der
                  anfragende Provider, ggf. Ländercode, Sprache, Gerätename
                </td>
                <td>
                  statistische Auswertungen zum Zweck der Optimierung unserer
                  Webseite, Gewährleistung der Stabilität und Betriebssicherheit
                  der Webseite
                </td>
                <td>
                  Art. 6 Abs. 1 S.1 lit. f DSGVO aufgrund unseres berechtigten
                  Interesses der Betrugsprävention und Qualitätssicherung
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  Erfüllung gesetzlicher Pflichten, aus Gründen der
                  Datensicherheit
                </td>
                <td>Art. 6 Abs. 1 S. 1 lit. c DSGVO</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
