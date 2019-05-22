<template>
  <div class="userinfo">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select placeholder="性别" v-model="form.sex">
          <el-option label="男" value="0"></el-option>
          <el-option label="女" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户ID" width="150">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名称" width="150">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>性别: {{ scope.row.sex }}</p>
            <p>出生年月: {{ scope.row.birth }}</p>
            <p>联系方式: {{ scope.row.phone }}</p>
            <p>用户头像: {{ scope.row.photo }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="真实姓名" width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column label="密码" width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.password }}</span>
        </template>
      </el-table-column>

      <el-table-column label="证件号" width="180">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 10px">{{ scope.row.code }}</span>
        </template>
      </el-table-column>

      <el-table-column label="个人简介" width="80">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.description }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详情</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  data() {
    return {
      form:{
          name:'',
          sex:''
      },
      tableData: [
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        },
        {
          userId: "WKT789",
          name: "欧阳山峰",
          username: "欧阳山峰",
          password: "DKDALLDJSDJLDH",
          sex: "男",
          birth: "1998-09-09",
          code: "3456781278378291",
          phone: "18890789090",
          photo:
            "www.baidu.com?photo=hasjdhasdjsahdjkshdjasdsjkdhasjad77dadjksdjkasdkadbsbhcjs7",
          description: "棒棒哒，么么哒"
        }
      ]
    };
  }
};
</script>

<style scoped>
.userinfo {
  padding: 25px;
}
</style>
<style>
.userinfo .el-input__inner {
  width: 220px !important;
}
.el-table td,
.el-table th {
  padding: 8px 0px;
}

.el-pagination {
  padding: 25px 5px;
  text-align: center;
}
</style>


