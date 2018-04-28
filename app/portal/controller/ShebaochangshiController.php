<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;
use app\portal\model\PortalCategoryModel;
use app\portal\service\PostService;
use cmf\controller\HomeBaseController;
use think\Db;

class ShebaochangshiController extends HomeBaseController {
	public function index() {
		$id = $this->request->param('id', 0, 'intval');
		$portalCategoryModel = new PortalCategoryModel();
		$postService = new PostService();
		$categoryTree = $portalCategoryModel->categoryTree();
		$params = $this->request->param();
		if ($id == 0) {
			$category = $portalCategoryModel->where('id', 1)->where('status', 1)->find();
			$data = $postService->publishedAll();
		} else {
			$category = $portalCategoryModel->where('id', $id)->where('status', 1)->find();
			$data = $postService->publishedAll($id);
		}
		$data->appends($params);
		$this->assign('categoryTree', $categoryTree);
		$this->assign('articles', $data->items());
		$this->assign('page', $data->render());
		$this->assign('category', $category);
		return $this->fetch(':shebaochangshi');
	}

	public function article() {
		$portalCategoryModel = new PortalCategoryModel();
		$postService = new PostService();
		$articleId = $this->request->param('id', 0, 'intval');
		$categoryId = $this->request->param('cid', 0, 'intval');
		$article = $postService->publishedArticle($articleId, $categoryId);
		if (empty($article)) {
			abort(404, '文章不存在!');
		}
		$prevArticle = $postService->publishedPrevArticle($articleId, $categoryId);
		$nextArticle = $postService->publishedNextArticle($articleId, $categoryId);
		if (empty($categoryId)) {
			$categories = $article['categories'];
			if (count($categories) > 0) {
				$this->assign('category', $categories[0]);
			} else {
				abort(404, '文章未指定分类!');
			}
		} else {
			$category = $portalCategoryModel->where('id', $categoryId)->where('status', 1)->find();
			if (empty($category)) {
				abort(404, '文章不存在!');
			}
			$this->assign('category', $category);
		}
		Db::name('portal_post')->where(['id' => $articleId])->setInc('post_hits');
		hook('portal_before_assign_article', $article);
		$this->assign('article', $article);
		$this->assign('prev_article', $prevArticle);
		$this->assign('next_article', $nextArticle);
		return $this->fetch(':article');
	}
}
