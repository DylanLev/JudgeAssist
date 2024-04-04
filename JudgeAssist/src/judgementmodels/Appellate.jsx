import React from 'react';

const Appellate = ({ plaintiffid, plaintiffstatus, plaintiffrepresentative, defendantid, defendantstatus, defendantrepresentative, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations
}) => {
  return (
    <div>
      <h2>Appellate Judgment</h2>
      
      <h3>Identity of the parties:</h3>
      <p>
        In the matter of Case ת"א 4320-04-24, the appellant, {plaintiffid}, {plaintiffstatus}, represented by their legal representative, {plaintiffrepresentative}, filed an appeal against the appellee, {defendantid}, {defendantstatus}, represented by their legal counsel, {defendantrepresentative}. The parties have been properly identified and are before this honorable court.
      </p>

      <h3>Facts of the dispute:</h3>
      <p>
        The facts underlying this appellate dispute are elucidated through the arguments presented by the parties. The appellant contends {plaintiffallegations}, while the appellee asserts {defendantcounterclaims}. The court meticulously reviewed the trial record, including transcripts, pleadings, and exhibits, to evaluate the merits of each party's contentions.
      </p>

      <h3>Reasons for decision:</h3>
      <p>
        In rendering its decision, the court conducted a thorough examination of the trial proceedings and the arguments advanced by both parties. It is incumbent upon this appellate tribunal to review the lower court's decision in light of applicable legal standards and precedent. After careful consideration, the court finds that {reasons}, grounded in established legal principles and supported by relevant case law. The court's decision prioritizes the principles of justice and fairness, ensuring a just resolution to the dispute at hand.
      </p>

      <h3>Device:</h3>
      <p>
        This judgment is transmitted electronically through the secure Electronic Court Filing System (ECFS). The utilization of electronic platforms for the dissemination of appellate decisions underscores the court's commitment to modernizing its processes while ensuring efficient access to justice. By harnessing technology, the court aims to streamline the appellate process, thereby enhancing the administration of justice.
      </p>

      <h3>Final declarations:</h3>
      <p>
        In light of the record and the applicable legal standards, the court hereby renders its decision: {finaldeclarations}. This ruling is deemed appropriate and consonant with the principles of appellate review, taking into account the rights and interests of the parties.
      </p>

      <h3>Signatures and court stamp:</h3>
      <p>
        Upon the pronouncement of this judgment, the undersigned appellate judge affixes their signature, affirming the official endorsement of this decision. This judgment is issued under the authority vested in this court and bears the official seal of the Court of Tel Aviv, symbolizing the solemnity and legitimacy of its contents.
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

export default Appellate;
