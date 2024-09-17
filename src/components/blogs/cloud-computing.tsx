import Link from "next/link";

export const CloudComputing = () => {
  return (
    <div data-scroll-section>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h2 className="text-xl font-medium lg:flex lg:flex-row items-center gap-2">
          - Cloud Computing
        </h2>
        <div className="text-quaternary opacity-50">2024/09/17</div>
      </div>
      <div className="pl-8 pt-4 font-normal flex flex-col gap-2">
        <h3 className="font-semibold">1. What is cloud computing?</h3>
        <p className="opacity-70">
          Simply put, cloud computing is the delivery of computing
          services—including servers, storage, databases, networking, software,
          analytics, and intelligence—over the internet (“the cloud”) to offer
          faster innovation, flexible resources, and economies of scale. You
          typically pay only for cloud services you use, helping you lower your
          operating costs, run your infrastructure more efficiently, and scale
          as your business needs change (Microsoft, n.d.).
        </p>
        <h3 className="font-semibold">
          2. Is cloud computing a new technology per se? In other words, what
          are the unique technology features of cloud computing, if any?
        </h3>
        <p className="opacity-70">
          Cloud computing is a big shift from the traditional way businesses
          think about IT resources. Here are seven common reasons organizations
          are turning to cloud computing services: Cost, Speed, Global scale,
          Productivity, Performance, Reliability, Security (Microsoft, n.d.).
        </p>
        <h3 className="font-semibold">
          3. What are the three major cloud service models?
        </h3>
        <p className="opacity-70">
          Infrastructure as a service (IaaS), platform as a service (Paas), and
          software as a service (SaaS). They are sometimes called the cloud
          computing “stack” because they build on top of one another. Knowing
          what they are and how they’re different makes it easier to accomplish
          your business goals (Microsoft, n.d.).
        </p>
        <h3 className="font-semibold">
          4. Name at least 3 real-world domains where the application of cloud
          computing was (or can be) very enabling and effective.
        </h3>
        <p className="opacity-70">
          Some of the real-world applications of cloud computing.
        </p>
        <p className="opacity-70">
          <b>Online Data Storage:</b> Cloud computing allows storing data like
          files, images, audios, and videos, etc on the cloud storage. The
          organization need not set physical storage systems to store a huge
          volume of business data which costs so high nowadays. As they are
          growing technologically, data generation is also growing with respect
          to time, and storing that becoming problem. In that situation, Cloud
          storage is providing this service to store and access data any time as
          per requirement.
        </p>
        <p className="opacity-70">
          <b>Backup and Recovery:</b> Cloud vendors provide security from their
          side by storing safe to the data as well as providing a backup
          facility to the data. They offer various recovery application for
          retrieving the lost data. In the traditional way backup of data is a
          very complex problem and also it is very difficult sometimes
          impossible to recover the lost data. But cloud computing has made
          backup and recovery applications very easy where there is no fear of
          running out of backup media or loss of data.
        </p>
        <p className="opacity-70">
          <b>Bigdata Analysis:</b> We know the volume of big data is so high
          where storing that in traditional data management system for an
          organization is impossible. But cloud computing has resolved that
          problem by allowing the organizations to store their large volume of
          data in cloud storage without worrying about physical storage. Next
          comes analyzing the raw data and finding out insights or useful
          information from it is a big challenge as it requires high-quality
          tools for data analytics. Cloud computing provides the biggest
          facility to organizations in terms of storing and analyzing big
          data.(Geeks For Geeks, 2022)
        </p>
        <h3 className="font-semibold">
          5. What is the economic/business model of cloud computing?
        </h3>
        <p className="opacity-70">
          Cloud computing allows businesses to scale their operations up or down
          as needed, reducing the need for expensive hardware upgrades or
          investments in new equipment. Cloud computing also eliminates the need
          for on-site maintenance and support, as all software and hardware is
          managed by the cloud provider. This can lead to significant cost
          savings for businesses, as they no longer need to hire dedicated IT
          staff or invest in expensive software licenses (Asia Business Outlook
          Team, n.d.).
        </p>
        <p className="font-semibold pt-4">References:</p>
        <ul className=" leading-8">
          <li>Microsoft. What is Cloud Computing. (n.d.).</li>
          <li>
            <a
              className="underline"
              href="https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing#:~:text=Simply%20put%2C%20cloud%20computing%20is,resources%2C%20and%20economies%20of%20scale"
            >
              https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing#:~:text=Simply%20put%2C%20cloud%20computing%20is,resources%2C%20and%20economies%20of%20scale
            </a>
          </li>
          <li>
            Geeks For Geeks. (2022, December 9). Real World Applications of
            Cloud Computing.
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.geeksforgeeks.org/real-world-applications-of-cloud-computing/"
            >
              https://www.geeksforgeeks.org/real-world-applications-of-cloud-computing/
            </Link>
          </li>
          <li>
            Asia Business Outlook Team. (n.d.). How Cloud Computing Can Be A
            Cost-Effective Solution for Businesses
          </li>
          <li>
            <Link
              className="underline"
              href="https://www.asiabusinessoutlook.com/perspective/how-cloud-computing-can-be-a-costeffective-solution-for-businesses-nwid-3032.html#:~:text=Cloud%20computing%20also%20eliminates%20the,invest%20in%20expensive%20software%20licenses"
            >
              https://www.asiabusinessoutlook.com/perspective/how-cloud-computing-can-be-a-costeffective-solution-for-businesses-nwid-3032.html#:~:text=Cloud%20computing%20also%20eliminates%20the,invest%20in%20expensive%20software%20licenses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
