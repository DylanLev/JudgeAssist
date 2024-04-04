import React from 'react';

const Administrative = ({ plaintiffid, plaintiffstatus, plaintiffrepresentative, defendantid, defendantstatus, defendantrepresentative, plaintiffallegations, defendantcounterclaims, reasons, finaldeclarations
}) => {
  return (
    <div>
      <h2>Administrative Judgment</h2>
      
      <h3>Identity of the parties:</h3>
      <p>
        In the matter of Case ת"א 4320-04-24, the petitioner, {plaintiffid}, {plaintiffstatus}, represented by their legal representative, {plaintiffrepresentative}, filed a petition against the respondent, {defendantid}, {defendantstatus}, represented by their legal counsel, {defendantrepresentative}. The parties have been properly identified and are before this honorable court.
      </p>

      <h3>Facts of the dispute:</h3>
      <p>
        The origins of this administrative dispute are delineated through the accounts presented by both parties. The petitioner asserts {plaintiffallegations}, while the respondent rebuts these assertions, contending {defendantcounterclaims}. The court meticulously examined the evidence, including affidavits, expert opinions, and relevant documentation, to ascertain the merits of each party's contentions.
      </p>

      <h3>Reasons for decision:</h3>
      <p>
        In reaching its decision, the court meticulously evaluated the evidence and legal arguments presented by both parties. It is the duty of this tribunal to assess the case in light of relevant statutes and precedents. Following thorough deliberation, the court concludes that {reasons}, grounded in prevailing legal principles and supported by pertinent precedents. The court's decision prioritizes fairness and adherence to the rule of law, ensuring a just outcome for all involved parties.
      </p>

      <h3>Device:</h3>
      <p>
        This judgment is disseminated electronically through the secure Electronic Court Filing System (ECFS). The adoption of electronic platforms for the distribution of judicial decisions underscores the court's commitment to modernizing its procedures while ensuring the swift administration of justice. Through the use of technology, the court aims to improve accessibility and efficiency, thereby facilitating seamless interactions within the legal domain.
      </p>

      <h3>Final declarations:</h3>
      <p>
        In light of the evidence presented and relevant legal standards, the court renders the following decision: {finaldeclarations}. This ruling is deemed appropriate and equitable, taking into account the rights and obligations of each party involved.
      </p>

      <h3>Signatures and court stamp:</h3>
      <p>
        Upon the pronouncement of this judgment, the undersigned presiding judge appends their signature, affirming the official endorsement of this decision. This judgment is issued under the authority vested in this court and bears the official seal of the Court of Tel Aviv, signifying the solemnity and legitimacy of its contents.
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

export default Administrative;
