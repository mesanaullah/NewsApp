import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import TextToSpeech from "../components/TextToSpeech";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (

    <div className="flex flex-col gap-8 mt-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-full flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-full">
            <Image src={data.img} w="600" className="rounded-sm" />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            In a big bonanza to all taxpayers with a special focus on the middle class, Finance Minister Nirmala Siatharaman announced a significant cut in tax rates and an increase in rebates. While those with annual taxable income of up to Rs 12 lakh will have no tax liability, those with higher incomes will have savings of up to Rs 1.1 lakh on account of rate rationalization under the new tax regime (NTR).
          </p>
          <p>
            Under the NTR, the new tax slabs are: nil tax on annual income of up to Rs 4 lakh, 5 per cent on Rs 4 lakh-8 lakh, 10 per cent on Rs 8 lakh-12 lakh, 15 per cent on Rs 12 lakh-16 lakh, 20 per cent on Rs 16 lakh-20 lakh, 25 per cent on Rs 20 lakh-24 lakh, and 30 per cent on annual income above Rs 24 lakh.
          </p>
          <p>
            Under the NTR, annual taxable income is calculated by deducting Rs 75,000 (standard deduction) from the salary, and this benefit is available to all taxpayers under the NTR. So effectively, those with an annual salary of Rs 12.75 lakh will have no tax liability as per the Budget proposal.
          </p>
          <p>
            While there are tax slabs for those with incomes up to Rs 12 lakh, Sitharaman announced that the rebate will fully offset any tax liability for such individuals, which means that they won’t have to pay any personal income tax. Currently under the NTR, an individual with an annual income of Rs 12 lakh has an income tax liability of Rs 80,000.
          </p>
          <p>
            Currently, NTR tax slabs are: nil tax on annual income of up to Rs 3 lakh, 5 per cent on Rs 3 lakh-7 lakh, 10 per cent on Rs 7 lakh-10 lakh, 15 per cent on Rs 10 lakh-12 lakh, 20 per cent on Rs 12 lakh-15 lakh, and 30 per cent on over Rs 15 lakh. There was full rebate on income tax on income of up to Rs 7 lakh.
          </p>
          <p>
            The latest rate rationalization and rebate have further sweetened the simplified NTR, and could prove to be the final nail in the coffin for the old tax regime (OTR), which has been left untouched in the Budget. Over the past few years, the government has been trying to make the simple and exemption-free NTR the preferred tax regime for salaried taxpayers.
          </p>
          <p>
            Over 70 per cent of salaried taxpayers have opted for the relatively simple NTR over the OTR, which offers various exemptions but has higher tax rates. This suggests that the government’s efforts to sweeten the new regime and make it more lucrative vis-à-vis the OTR in recent years has been bearing fruit.
          </p>
          <p>
            The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.
          </p>
          <p>
            But does that mean that those earning Rs 15 lakh will have to pay tax on only Rs 3 lakh?
          </p>
          <p>
            The answer is no, as the rebate is only applicable to those earning up to Rs 12 lakh. If your taxable income is even Rs 12.1 lakh, you will have to pay taxes as per the slab rates under the NTR. So, on a taxable income of Rs 12.1 lakh, the income tax liability would be Rs 61,500—sum of 5 per cent tax on income of Rs 4 lakh-8 lakh, 10 per cent on Rs 8 lakh-12 lakh, and 15 per cent on Rs 12 lakh-16 lakh. Similarly, an individual earning Rs 15 lakh will end up paying a tax of Rs 105000.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-20 left-0 right-0 z-[60]">

          {/* <div className="px-4 h-max sticky top-20 left-0 right-0 bg-white z-10"> */}
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link to="https://x.com/sanaul06">
                <FaXTwitter />
              </Link>
              <Link to="https://www.instagram.com/mesanaulla/">
                <SiInstagram />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-4 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              World
            </Link>
            <Link className="underline" to="/">
              Politics
            </Link>
            <Link className="underline" to="/">
              Business
            </Link>
            <Link className="underline" to="/">
              Sports
            </Link>

          </div>
          <h1 className="mt-4 mb-4 text-sm font-medium">Search</h1>
          <Search />
          {/* <TextToSpeech /> */}
        </div>
      </div>
      <Comments postId="" />

    </div>






    // <div className="flex flex-col gap-8 mt-8">
    //   {/* detail */}
    //   <div className="flex gap-8">
    //     <div className="lg:w-full flex flex-col gap-8">
    //       <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
    //         Big tax break for middle class: No income tax for those earning up to Rs 12.75 lakh under New Tax Regime
    //       </h1>
    //       <div className="flex items-center gap-2 text-gray-400 text-sm">
    //         <span>Written by</span>
    //         <Link className="text-blue-800">Sanaullah</Link>
    //         <span>on</span>
    //         <Link className="text-blue-800">Business</Link>
    //         <span>2 days ago</span>
    //       </div>
    //       <p className="text-gray-500 font-medium">The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.</p>
    //     </div>
    //     <div className="hidden lg:block w-full">
    //       <Image src="R_p1.jpg" w="600" className="rounded-sm" />
    //     </div>
    //   </div>
    //   {/* content */}
    //   <div className="flex flex-col md:flex-row gap-12 justify-between">
    //     {/* text */}
    //     <div className="lg:text-lg flex flex-col gap-6 text-justify">
    //       <p>
    //         In a big bonanza to all taxpayers with a special focus on the middle class, Finance Minister Nirmala Siatharaman announced a significant cut in tax rates and an increase in rebates. While those with annual taxable income of up to Rs 12 lakh will have no tax liability, those with higher incomes will have savings of up to Rs 1.1 lakh on account of rate rationalization under the new tax regime (NTR).
    //       </p>
    //       <p>
    //         Under the NTR, the new tax slabs are: nil tax on annual income of up to Rs 4 lakh, 5 per cent on Rs 4 lakh-8 lakh, 10 per cent on Rs 8 lakh-12 lakh, 15 per cent on Rs 12 lakh-16 lakh, 20 per cent on Rs 16 lakh-20 lakh, 25 per cent on Rs 20 lakh-24 lakh, and 30 per cent on annual income above Rs 24 lakh.
    //       </p>
    //       <p>
    //         Under the NTR, annual taxable income is calculated by deducting Rs 75,000 (standard deduction) from the salary, and this benefit is available to all taxpayers under the NTR. So effectively, those with an annual salary of Rs 12.75 lakh will have no tax liability as per the Budget proposal.
    //       </p>
    //       <p>
    //         While there are tax slabs for those with incomes up to Rs 12 lakh, Sitharaman announced that the rebate will fully offset any tax liability for such individuals, which means that they won’t have to pay any personal income tax. Currently under the NTR, an individual with an annual income of Rs 12 lakh has an income tax liability of Rs 80,000.
    //       </p>
    //       <p>
    //         Currently, NTR tax slabs are: nil tax on annual income of up to Rs 3 lakh, 5 per cent on Rs 3 lakh-7 lakh, 10 per cent on Rs 7 lakh-10 lakh, 15 per cent on Rs 10 lakh-12 lakh, 20 per cent on Rs 12 lakh-15 lakh, and 30 per cent on over Rs 15 lakh. There was full rebate on income tax on income of up to Rs 7 lakh.
    //       </p>
    //       <p>
    //         The latest rate rationalization and rebate have further sweetened the simplified NTR, and could prove to be the final nail in the coffin for the old tax regime (OTR), which has been left untouched in the Budget. Over the past few years, the government has been trying to make the simple and exemption-free NTR the preferred tax regime for salaried taxpayers.
    //       </p>
    //       <p>
    //         Over 70 per cent of salaried taxpayers have opted for the relatively simple NTR over the OTR, which offers various exemptions but has higher tax rates. This suggests that the government’s efforts to sweeten the new regime and make it more lucrative vis-à-vis the OTR in recent years has been bearing fruit.
    //       </p>
    //       <p>
    //         The finance minister has raised the limit of income tax rebate from Rs 7 lakh to Rs 12 lakh which essentially means that if an individual has an income of up to Rs 12 lakh, she will have zero tax liability.
    //       </p>
    //       <p>
    //         But does that mean that those earning Rs 15 lakh will have to pay tax on only Rs 3 lakh?
    //       </p>
    //       <p>
    //         The answer is no, as the rebate is only applicable to those earning up to Rs 12 lakh. If your taxable income is even Rs 12.1 lakh, you will have to pay taxes as per the slab rates under the NTR. So, on a taxable income of Rs 12.1 lakh, the income tax liability would be Rs 61,500—sum of 5 per cent tax on income of Rs 4 lakh-8 lakh, 10 per cent on Rs 8 lakh-12 lakh, and 15 per cent on Rs 12 lakh-16 lakh. Similarly, an individual earning Rs 15 lakh will end up paying a tax of Rs 105000.
    //       </p>
    //     </div>
    //     {/* menu */}
    //     <div className="px-4 h-max sticky top-20 left-0 right-0 z-[60]">

    //       {/* <div className="px-4 h-max sticky top-20 left-0 right-0 bg-white z-10"> */}
    //       <h1 className="mb-4 text-sm font-medium">Author</h1>
    //       <div className="flex flex-col gap-4">
    //         <div className="flex items-center gap-8">
    //           <Image
    //             src="user_profile.jpg"
    //             className="w-12 h-12 rounded-full object-cover"
    //             w="48"
    //             h="48"
    //           />
    //           <Link className="text-blue-800"></Link>
    //         </div>
    //         <p className="text-sm text-gray-500">
    //           Lorem ipsum dolor sit amet consectetur
    //         </p>
    //         <div className="flex gap-2">
    //           <Link to="https://x.com/sanaul06">
    //             <FaXTwitter />
    //           </Link>
    //           <Link to="https://www.instagram.com/mesanaulla/">
    //             <SiInstagram />
    //           </Link>
    //         </div>
    //       </div>
    //       <PostMenuActions post="" />
    //       <h1 className="mt-4 mb-4 text-sm font-medium">Categories</h1>
    //       <div className="flex flex-col gap-2 text-sm">
    //         <Link className="underline">All</Link>
    //         <Link className="underline" to="/">
    //           World
    //         </Link>
    //         <Link className="underline" to="/">
    //           Politics
    //         </Link>
    //         <Link className="underline" to="/">
    //           Business
    //         </Link>
    //         <Link className="underline" to="/">
    //           Sports
    //         </Link>

    //       </div>
    //       <h1 className="mt-4 mb-4 text-sm font-medium">Search</h1>
    //       <Search />
    //       {/* <TextToSpeech /> */}
    //     </div>
    //   </div>
    //   <Comments postId="" />

    // </div>
  )
};

export default SinglePostPage;

