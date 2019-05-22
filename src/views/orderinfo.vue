<template>
  <div class="orderinfo">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input placeholder="请输入下单人姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker v-model="form.beginDate" type="date" placeholder="选择开始日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
         <el-date-picker v-model="form.endDate" type="date" placeholder="选择结束日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="订单ID" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>订单标题:{{ scope.row.orderTitle }}</p>
            <p>订单金额:￥{{ scope.row.orderMoney }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.orderId }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="下单人ID" width="120">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>用户名:{{ scope.row.sendUserName }}</p>
            <p>联系方式:{{ scope.row.phone }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.sendUserId }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="订单详情" width="80">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.orderInfo }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">详情</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="开始日期" width="100">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>{{ scope.row.beginDate }}</span>
        </template>
      </el-table-column>

      <el-table-column label="结束日期" width="100">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>{{ scope.row.endDate }}</span>
        </template>
      </el-table-column>

      <el-table-column label="城市" width="80">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>{{ scope.row.city }}</span>
        </template>
      </el-table-column>

      <el-table-column label="详细地址" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.address }}</p>
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
  name: "orderinfo",
  data() {
    return {
      form: {
        name: "",
        beginDate: "",
        endDate: ""
      },
      tableData: [
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        },
        {
          orderId: "OD123456",
          sendUserId: "US019221",
          sendUserName: "欧阳山峰",
          phone: "18809090909",
          orderTitle: "吃火锅不放火锅底料",
          orderMoney: "999.00",
          beginDate: "2018-09-09",
          endDate: "2019-10-10",
          city: "上海市",
          address: "上海市青浦区涞港路国家会展中心",
          orderInfo: "这是一个牛逼的系统"
        }
      ]
    };
  }
};
</script>

<style scoped>
.orderinfo {
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


