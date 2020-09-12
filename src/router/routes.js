
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
        component: () => import('pages/Home.vue') 
      },
      { path: '/contactus', 
        component: () => import('pages/Contact.vue') 
      },
      { path: '/posts', 
        component: () => import('pages/Posts.vue'),
      },     
      { path: '/sokapu', 
        component: () => import('pages/Sokapu.vue') 
      },   
      { path: '/press-release-southern-kaduna', 
        component: () => import('pages/Press.vue') 
      },      
      { path: '/disagree-with-garba-shehu', 
        component: () => import('pages/Disagree.vue') 
      },  
      { path: '/series-of-attacks-southern-kaduna', 
        component: () => import('pages/Attacks.vue') 
      }, 
      { path: '/killings-in-kobin-village-southern-kaduna', 
        component: () => import('pages/Killings.vue') 
      },                         
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
