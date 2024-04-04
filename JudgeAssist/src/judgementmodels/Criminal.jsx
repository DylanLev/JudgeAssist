import React from 'react';

const Criminal = ({ plaintiffid, plaintiffrepresentative, defendantid, defendantrepresentative, facts, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations
}) => {
  return (
    <div>
      <h2>Criminal Judgment</h2>
      
      <h3>Identity of the parties:</h3>
      <p>
        In the matter of Case ת"א 4320-04-24, the prosecution, {plaintiffid}, represented by the esteemed district attorney, {plaintiffrepresentative}, filed charges against the defendant, {defendantid}, represented by their distinguished defense counsel, {defendantrepresentative}. The parties have been properly identified and are present before this honorable court.
      </p>

      <h3>Facts of the case:</h3>
      <p>
        The events leading to this criminal proceeding have been narrated by both the prosecution and defense. The prosecution alleges that {plaintiffallegations}, while the defense contends that {defendantcounterclaims}. The court has meticulously reviewed the evidence presented, including witness testimonies, forensic reports, and expert testimonies, to ascertain the veracity of each party's claims.
      </p>

      <h3>Reasons for the verdict:</h3>
      <p>
        In rendering its verdict, the court has meticulously scrutinized the evidence and legal arguments presented by both the prosecution and defense. It is incumbent upon this tribunal to evaluate the case in light of applicable law and jurisprudence. After due deliberation, the court finds that {reasons}, rooted firmly in the prevailing legal principles and supported by relevant precedents. The court's decision is guided by the pursuit of justice and fairness, ensuring a fair trial for the accused and upholding the rule of law.
      </p>

      <h3>Device:</h3>
      <p>
        This verdict is transmitted electronically through the secure Electronic Court Filing System (ECFS). The use of electronic platforms for disseminating judicial decisions underscores the court's commitment to modernize its processes while ensuring prompt delivery of justice. By embracing technology, the court aims to improve accessibility and efficiency, thereby fostering a seamless legal framework.
      </p>

      <h3>Final declarations:</h3>
      <p>
        In light of the evidence presented and the applicable legal standards, the court hereby delivers its verdict. The accused is found {finaldeclarations}. This verdict is deemed just and equitable, considering the rights and obligations of all parties involved.
      </p>

      <h3>Signatures and court stamp:</h3>
      <p>
        Upon the pronouncement of this verdict, the undersigned presiding judge affixes their signature, signifying the official endorsement of this decision. This judgment is issued under the authority vested in this court and bears the official seal of Court of Tel Aviv, symbolizing the solemnity and legitimacy of its contents.
      </p>
      <p>
        Judge Sarah Cohen <br />
        Chief Justice David Levy <br />
        Court of Tel Aviv
      </p>
      <pre>
        _______ <br />
       / ___ \ <br />
      | |   | | Court of <br />
      | |___| | Tel Aviv <br />
       \_____/
      </pre>
    </div>
  );
};

export default Criminal;
