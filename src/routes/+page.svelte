<script>
function aboutMe() {
    document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<div class="relative text-center p-1">
  <img 
    src="/branch.png" 
    alt="cherry blossom branch" 
    class="w-120 -mt-23 h-auto ml-111"
  />
  <img 
    src="/flower1.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[25px] left-[590px] w-[180px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />

    <img 
    src="/flower2.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[128px] left-[610px] w-[150px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />

    <img 
    src="/flower3.png" 
    alt="flower detail" 
    class="absolute cursor-pointer top-[110px] left-[762px] w-[150px] h-auto transition-transform duration-900 ease-in-out hover:scale-115 active:rotate-[360deg]"
    />
</div>

<button on:click={aboutMe} class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">About Me!</button>
<button class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">My Experience</button>
<button class="cursor-pointer inline-flex h-10 items-center justify-center rounded-md text-amber-900 bg-gradient-to-r from-amber-100 via-orange-100 to-orange-200 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-rose-200 dark:focus:ring-red-200/50 shadow-lg shadow-rose-300/50 dark:shadow-lg dark:shadow-red-200/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition active:scale-110">Contact</button>


<div id="aboutme" class="h-screen flex flex-row items-center justify-center bg-[#f7efe4] px-10 gap-10">
  <div class="flex-shrink-0">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img src="/mypic1.JPG" alt="a photo of me!" class="rounded-lg max-w-lg h-80 object-cover dark:focus:ring-rose-400/50 shadow-lg shadow-rose-400/50 dark:shadow-lg dark:shadow-rose-400/80 transition-transform duration-700 hover:scale-105" />
  </div>

  <div class="text-right max-w-md">
    <h1 class="text-3xl font-bold">Nice to meet you! 🌸</h1>
    <p class="mt-4 text-justify max-w-prose ml-auto" style="font-size: 0.925rem;">
      I'm Rithika, a third-year computer science and statistics student at University of Toronto.
      I love working on creative tech projects, helping others learn to code, and building things that are interesting! I'm super excited about data science and machine learning, and I'm working toward a career where I can apply these skills.
      <br /><br />
      Outside of tech, I enjoy watching shows and biking. 🌺
    </p>
  </div>
</div>